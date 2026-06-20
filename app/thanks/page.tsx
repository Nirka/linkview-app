import Link from "next/link";

export const metadata = {
  title: "הבקשה התקבלה | LinkView",
  description: "בקשת הניסיון התקבלה בהצלחה."
};

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white" dir="rtl">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-400/15 text-3xl text-cyan-300 ring-1 ring-cyan-300/30">
          ✓
        </div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          LinkView Trial
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          קיבלנו את הבקשה שלך
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          שלחנו אליך אישור במייל. הצוות שלנו יבדוק את הפרטים ויחזור אליך עם המשך התהליך להפעלת ניסיון LinkView.
        </p>

        <div className="mt-10 grid w-full max-w-4xl gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-right">
            <div className="mb-3 text-2xl">1</div>
            <h2 className="font-semibold">בדיקת פרטים</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">נוודא שסוג השימוש מתאים למסלול ניסיון מהיר.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-right">
            <div className="mb-3 text-2xl">2</div>
            <h2 className="font-semibold">קבלת הנחיות</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">תקבל קישור הורדה והסבר קצר להתחלת עבודה.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-right">
            <div className="mb-3 text-2xl">3</div>
            <h2 className="font-semibold">חיבור ראשון</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">מתחילים לעבוד עם שליטה מרחוק בצורה פשוטה ומהירה.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/download" className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
            מעבר לעמוד הורדה
          </Link>
          <Link href="https://linkview.pro" className="rounded-full border border-white/15 px-7 py-3 font-semibold text-white hover:bg-white/10">
            חזרה לאתר LinkView
          </Link>
        </div>
      </section>
    </main>
  );
}
