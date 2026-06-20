import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(input: unknown) {
  return String(input ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function row(label: string, value: unknown) {
  return `<tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#475569;width:180px">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#0b1d3a;font-weight:600">${escapeHtml(value)}</td></tr>`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const required = ["name", "email", "phone", "userType", "deviceCount", "useCase"];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json({ error: "חסר שדה חובה" }, { status: 400 });
      }
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL || "LinkView <noreply@auth.linkview.pro>";
    const salesTo = process.env.SALES_TO_EMAIL;

    if (!apiKey) {
      return NextResponse.json({ error: "שרת השליחה עדיין לא הוגדר. יש להגדיר RESEND_API_KEY ב־Vercel." }, { status: 500 });
    }

    if (!salesTo) {
      return NextResponse.json({ error: "כתובת יעד לא הוגדרה. יש להגדיר SALES_TO_EMAIL ב־Vercel." }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const table = `
      <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px">
        ${row("שם", body.name)}
        ${row("אימייל", body.email)}
        ${row("טלפון", body.phone)}
        ${row("חברה", body.company)}
        ${row("סוג משתמש", body.userType)}
        ${row("כמות מחשבים", body.deviceCount)}
        ${row("שימוש מרכזי", body.useCase)}
        ${row("הערות", body.notes)}
      </table>
    `;

    const internalSubject = `Trial Request: ${body.userType} - ${body.name}`;
    const html = `
      <div dir="rtl" style="font-family:Arial,sans-serif;line-height:1.6;color:#0b1d3a">
        <h2>בקשת ניסיון חדשה — LinkView</h2>
        ${table}
      </div>
    `;

    await resend.emails.send({
      from,
      to: salesTo,
      replyTo: body.email,
      subject: internalSubject,
      html
    });

    await resend.emails.send({
      from,
      to: body.email,
      replyTo: salesTo,
      subject: "קיבלנו את בקשת הניסיון שלך ל־LinkView",
      html: `
        <div dir="rtl" style="font-family:Arial,sans-serif;line-height:1.7;color:#0b1d3a;max-width:680px;margin:auto">
          <h2>קיבלנו את הבקשה שלך</h2>
          <p>שלום ${escapeHtml(body.name)},</p>
          <p>תודה שפנית ל־LinkView. קיבלנו את בקשת הניסיון ונבדוק את הפרטים כדי לשלוח לך הנחיות התחלה מתאימות.</p>
          <p>לנוחותך, מצורף בהמשך העתק של הפרטים ששלחת.</p>
          ${table}
          <p style="margin-top:24px">בברכה,<br/>צוות LinkView</p>
        </div>
      `
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "שגיאה בשליחת הבקשה" }, { status: 500 });
  }
}
