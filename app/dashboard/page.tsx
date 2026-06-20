import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Download, MonitorDot, Clock3, Cable, ShieldCheck } from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Logo small />
          <Link className="btn-secondary" href="https://linkview.pro/contact">תמיכה</Link>
        </div>
      </header>
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-navy">ברוכים הבאים ל־LinkView</h1>
          <p className="mt-2 text-slate-600">דשבורד התחלה לדוגמה. בשלב הבא נחבר כאן משתמשים, רישיונות, מכשירים ותשלומים.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="card"><Clock3 className="mb-3 h-8 w-8 text-linkblue" /><b className="text-xl">14 ימים לניסיון</b><p className="mt-2 text-slate-600">סטטוס ניסיון: פעיל</p></div>
          <div className="card"><MonitorDot className="mb-3 h-8 w-8 text-linkblue" /><b className="text-xl">0/5 מחשבים</b><p className="mt-2 text-slate-600">הוסיפו מחשבים לניהול</p></div>
          <div className="card"><Cable className="mb-3 h-8 w-8 text-linkblue" /><b className="text-xl">0/30 חיבורים</b><p className="mt-2 text-slate-600">מגבלת ניסיון התחלתית</p></div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="card">
            <h2 className="text-2xl font-black text-navy">התחלה ב־3 צעדים</h2>
            <ol className="mt-5 grid gap-4 text-slate-700">
              <li className="rounded-2xl bg-slate-50 p-4"><b>1. הורידו את LinkView</b><br/>בקרוב: הורדה רשמית מתוך הדשבורד.</li>
              <li className="rounded-2xl bg-slate-50 p-4"><b>2. התקינו על מחשב הלקוח או המשרד</b><br/>התקנה פשוטה עם מזהה חיבור.</li>
              <li className="rounded-2xl bg-slate-50 p-4"><b>3. התחברו מרחוק</b><br/>מסך, מקלדת, עכבר ותמיכה מרחוק.</li>
            </ol>
            <button className="btn-primary mt-6" type="button"><Download className="ml-2 h-4 w-4" /> הורדה בקרוב</button>
          </div>
          <div className="card bg-navy text-white">
            <ShieldCheck className="mb-4 h-10 w-10 text-cyan" />
            <h2 className="text-2xl font-black">שימוש אחראי</h2>
            <p className="mt-3 leading-7 text-blue-100">LinkView מיועד לגישה מורשית בלבד. אין להשתמש במערכת כדי להתחבר למחשב ללא הסכמה והרשאה מפורשת.</p>
            <Link className="mt-6 inline-flex font-bold text-cyan" href="https://linkview.pro/contact">צריכים עזרה בהקמה?</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
