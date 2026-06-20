"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function RegisterPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "שליחה נכשלה");
      setStatus("success");
      setMessage("קיבלנו את בקשת הניסיון. שלחנו אליך אישור במייל ונחזור עם הנחיות התחלה.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "לא הצלחנו לשלוח את הבקשה");
    }
  }

  if (status === "success") {
    return (
      <main className="min-h-screen bg-gradient-to-b from-white to-ice px-6 py-10">
        <div className="mx-auto max-w-xl">
          <Logo small />
          <div className="card mt-8 text-center">
            <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-linkblue" />
            <h1 className="text-3xl font-black text-navy">הבקשה התקבלה</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">{message}</p>
            <div className="mt-7 flex justify-center gap-3">
              <Link className="btn-primary" href="/dashboard">תצוגת דשבורד לדוגמה</Link>
              <Link className="btn-secondary" href="https://linkview.pro">חזרה לאתר</Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-ice px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center justify-between">
          <Logo small />
          <Link className="btn-secondary" href="/login">כבר יש חשבון?</Link>
        </header>
        <section className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="card bg-navy text-white">
            <p className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-bold text-cyan">ניסיון חינם</p>
            <h1 className="text-4xl font-black leading-tight">התחילו להשתמש ב־LinkView</h1>
            <p className="mt-4 leading-7 text-blue-100">מיועד לטכנאים, נותני שירות ועסקים שרוצים פתרון שליטה מרחוק זמין ומהיר — בלי שיחת מכירה.</p>
            <div className="mt-8 grid gap-3 text-sm text-blue-50">
              <div className="rounded-2xl bg-white/10 p-4"><b>14 ימי ניסיון</b><br />ניתן לשינוי בהגדרות התוכנית.</div>
              <div className="rounded-2xl bg-white/10 p-4"><b>עד 5 מחשבים</b><br />מתאים לבדיקה אמיתית אצל טכנאי או עסק קטן.</div>
              <div className="rounded-2xl bg-white/10 p-4"><b>שימוש מורשה בלבד</b><br />גישה רק למחשבים שיש לך הרשאה להשתמש בהם.</div>
            </div>
          </aside>
          <form onSubmit={onSubmit} className="card grid gap-5">
            <div>
              <h2 className="text-3xl font-black text-navy">פתיחת ניסיון</h2>
              <p className="mt-2 text-slate-600">מלאו פרטים קצרים ונשלח הנחיות התחלה מסודרות.</p>
            </div>
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid gap-4 md:grid-cols-2">
              <div><label className="label">שם מלא</label><input name="name" className="input" required /></div>
              <div><label className="label">אימייל</label><input name="email" type="email" className="input" required /></div>
              <div><label className="label">טלפון</label><input name="phone" className="input" required /></div>
              <div><label className="label">שם העסק / החברה</label><input name="company" className="input" /></div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="label">סוג משתמש</label>
                <select name="userType" className="input" required>
                  <option value="technician">טכנאי / ספק IT</option>
                  <option value="business">עסק קטן / בינוני</option>
                  <option value="it_team">צוות IT פנימי</option>
                  <option value="enterprise">ארגון / פריסה פרטית</option>
                </select>
              </div>
              <div>
                <label className="label">כמה מחשבים תרצו לבדוק?</label>
                <select name="deviceCount" className="input" required>
                  <option value="1-2">1-2</option>
                  <option value="3-5">3-5</option>
                  <option value="6-20">6-20</option>
                  <option value="20+">20+</option>
                </select>
              </div>
            </div>
            <div>
              <label className="label">מה השימוש המרכזי?</label>
              <select name="useCase" className="input" required>
                <option value="support_clients">תמיכה מרחוק ללקוחות</option>
                <option value="office_pc_access">גישה למחשב משרד</option>
                <option value="employee_support">תמיכה בעובדים</option>
                <option value="replace_tool">החלפת AnyDesk / TeamViewer / כלי קיים</option>
                <option value="private_deployment">פריסה פרטית / דרישות אבטחה</option>
              </select>
            </div>
            <div>
              <label className="label">הערה קצרה</label>
              <textarea name="notes" className="input min-h-28" placeholder="ספרו בקצרה מה חשוב לכם..." />
            </div>
            <label className="flex gap-3 text-sm leading-6 text-slate-600">
              <input name="terms" value="accepted" type="checkbox" className="mt-1" required />
              <span>אני מאשר/ת שהשימוש ב־LinkView יתבצע רק במחשבים ובמערכות שיש לי הרשאה לגשת אליהם, ומבין/ה שמדובר בכלי גישה מרחוק רגיש.</span>
            </label>
            {message && status === "error" ? <div className="rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-700">{message}</div> : null}
            <button className="btn-primary w-full" disabled={status === "loading"} type="submit">
              {status === "loading" ? "שולח..." : "פתחו ניסיון חינם"}<ArrowLeft className="mr-2 h-4 w-4" />
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
