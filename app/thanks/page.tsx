import Link from "next/link";

const steps = [
  {
    title: "הורידו את LinkView",
    text: "עברו לעמוד ההורדה ובחרו את רכיב ההתקנה המתאים. בשלב זה ההורדה יכולה להיות זמנית / ידנית, ובהמשך נחבר אותה למנגנון רישוי מלא.",
  },
  {
    title: "התקינו על המחשב הראשון",
    text: "התקינו את LinkView על מחשב הלקוח או מחשב המשרד שאליו תרצו להתחבר מרחוק.",
  },
  {
    title: "התחילו חיבור ראשון",
    text: "אחרי ההתקנה תוכלו להתחיל תהליך התחברות ולבדוק את חוויית השליטה מרחוק בפועל.",
  },
];

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white" dir="rtl">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10">
        <header className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
          <Link href="/register" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 ring-1 ring-blue-300/30">
              <span className="h-4 w-7 rounded border-2 border-blue-300" />
            </span>
            <span className="text-2xl font-bold tracking-tight">LinkView</span>
          </Link>
          <Link
            href="/login"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 hover:bg-white/10"
          >
            התחברות
          </Link>
        </header>

        <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.15fr_0.85fr]">
          <section>
            <div className="mb-6 inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
              הניסיון הופעל — אפשר להתחיל עכשיו
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              ברוכים הבאים ל־LinkView. הניסיון שלכם מוכן להפעלה.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              קיבלנו את פרטי ההרשמה ושלחנו אליכם אישור במייל. אין צורך לחכות לשיחת מכירה או לאישור ידני — המטרה היא לאפשר לכם לבדוק את LinkView בצורה מהירה, קצרה ולעניין.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/download"
                className="rounded-full bg-blue-500 px-7 py-3 text-center font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
              >
                המשך להורדה
              </Link>
              <Link
                href="/dashboard"
                className="rounded-full border border-white/15 px-7 py-3 text-center font-semibold text-white transition hover:bg-white/10"
              >
                מעבר לדשבורד ניסיון
              </Link>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              הערה: השימוש מותר רק במחשבים ובמערכות שיש לכם הרשאה מפורשת לגשת אליהם. שימוש ללא הסכמה אסור ועלול להביא לחסימת החשבון.
            </p>
          </section>

          <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-blue-950/40 backdrop-blur">
            <h2 className="text-2xl font-bold">מה עושים עכשיו?</h2>
            <div className="mt-6 grid gap-4">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{step.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
              <h3 className="font-semibold text-cyan-100">מסגרת ניסיון מומלצת</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                <li>• 14 ימי ניסיון</li>
                <li>• עד 5 מחשבים לבדיקה</li>
                <li>• עד 30 חיבורים</li>
                <li>• ללא כרטיס אשראי</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
