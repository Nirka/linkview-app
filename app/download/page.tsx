import Link from "next/link";

export const metadata = {
  title: "הורדה | LinkView",
  description: "עמוד הורדה רשמי ל-LinkView."
};

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white" dir="rtl">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Official Download</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">הורדת LinkView</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            עמוד ההורדה הרשמי של LinkView. בשלב זה ההורדה נפתחת ללקוחות ניסיון ולטכנאים לפי אישור, כדי לשמור על תהליך שימוש אחראי ובטוח.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">LinkView Quick Support</h2>
            <p className="mt-3 leading-7 text-slate-300">
              מיועד לחיבור חד־פעמי מהיר לתמיכה מרחוק. מתאים ללקוח קצה שצריך לאפשר לטכנאי להתחבר לזמן מוגבל.
            </p>
            <button disabled className="mt-6 rounded-full bg-slate-700 px-6 py-3 font-semibold text-slate-300">
              הורדה תיפתח בקרוב
            </button>
          </div>

          <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-8">
            <h2 className="text-2xl font-bold">LinkView Agent</h2>
            <p className="mt-3 leading-7 text-slate-300">
              מיועד לניהול מחשבים קבועים, גישה חוזרת והרשאות במסגרת חשבון ניסיון או מנוי פעיל.
            </p>
            <button disabled className="mt-6 rounded-full bg-cyan-400/40 px-6 py-3 font-semibold text-white">
              זמין לאחר הפעלת חשבון
            </button>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-amber-300/20 bg-amber-300/10 p-6 text-amber-50">
          <h3 className="font-bold">שימוש אחראי בלבד</h3>
          <p className="mt-2 leading-7 text-amber-50/90">
            LinkView מיועדת לשימוש רק במחשבים ובמערכות שיש לכם הרשאה מפורשת לגשת אליהם. שימוש ללא הסכמה אסור.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/register" className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
            בקשת ניסיון חינם
          </Link>
          <Link href="mailto:support@linkview.pro" className="rounded-full border border-white/15 px-7 py-3 font-semibold text-white hover:bg-white/10">
            צריכים עזרה?
          </Link>
        </div>
      </section>
    </main>
  );
}
