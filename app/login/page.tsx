 יהיה פעיל לאחר חיבור Supabase/Auth. כרגע הוא משמש כמסך placeholder מקצועי.</p>
          <form className="mt-6 grid gap-4">
            <div><label className="label">אימייל</label><input className="input" type="email" placeholder="you@company.com" /></div>
            <div><label className="label">סיסמה</label><input className="input" type="password" placeholder="••••••••" /></div>
            <button className="btn-primary" type="button">התחברו</button>
          </form>
          <p className="mt-5 text-sm text-slate-600">אין חשבון? <Link className="font-bold text-linkblue" href="/register">התחילו בחינם</Link></p>
        </div>
      </div>
    </main>
  );
}
