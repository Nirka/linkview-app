import Link from "next/link";

export const metadata = {
  title: "התחברות | LinkView",
  description: "כניסה לפורטל LinkView לניהול ניסיון, מחשבים וחיבורים מרחוק."
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white" dir="rtl">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-6 py-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_420px]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 text-white/80 hover:text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500 text-lg font-bold">
                LV
              </span>
              <span className="text-xl font-bold">LinkView</span>
            </Link>

            <div className="mt-10 max-w-2xl">
              <p className="mb-4 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-100">
                פורטל לקוחות
              </p>
              <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
                התחברות ל־LinkView
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                מסך ההתחברות יהיה פעיל לאחר חיבור Supabase/Auth. כרגע הוא משמש כמסך
                placeholder מקצועי כדי שהפורטל יהיה שלם וניתן לפריסה תחת app.linkview.pro.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white p-6 text-slate-950 shadow-2xl">
            <h2 className="text-2xl font-black">כניסה לחשבון</h2>
            <p className="mt-2 text-sm text-slate-600">
              בקרוב: כניסה מאובטחת, אימות אימייל וניהול סביבת הניסיון.
            </p>

            <form className="mt-6 grid gap-4">
              <div>
                <label className="label">אימייל</label>
                <input className="input" type="email" placeholder="you@company.com" disabled />
              </div>
              <div>
                <label className="label">סיסמה</label>
                <input className="input" type="password" placeholder="••••••••" disabled />
              </div>
              <button
                className="rounded-2xl bg-slate-300 px-5 py-3 font-bold text-slate-600"
                type="button"
                disabled
              >
                התחברות תופעל בקרוב
              </button>
            </form>

            <div className="mt-6 rounded-2xl bg-blue-50 p-4 text-sm leading-6 text-slate-700">
              רוצים להתחיל ניסיון עכשיו? מלאו טופס הרשמה ונחזור אליכם עם פתיחת סביבת ניסיון.
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className="btn-primary text-center" href="/register">
                הרשמה לניסיון
              </Link>
              <Link className="btn-secondary text-center" href="https://linkview.pro/contact">
                יצירת קשר
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
