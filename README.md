# LinkView App Starter

Starter project for `app.linkview.pro`.

## What it includes

- `/` landing page for the app portal
- `/register` low-touch trial request form
- `/login` placeholder login page
- `/dashboard` placeholder onboarding dashboard
- `/api/register` API route that sends:
  - internal trial request email
  - confirmation email to the requester

## Required Vercel Environment Variables

Use the same Resend account/API key you already use.

```txt
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_FROM_EMAIL=LinkView <noreply@auth.linkview.pro>
SALES_TO_EMAIL=your-real-email@example.com
```

For testing, use your personal email as `SALES_TO_EMAIL`.

## Run locally

```powershell
npm.cmd install
npm.cmd run dev
```

Open:

```txt
http://localhost:3000/register
```

## Deploy

Create a new GitHub repo, for example:

```txt
linkview-app
```

Push this project to GitHub, import it in Vercel as a separate project, and attach:

```txt
app.linkview.pro
```

Do not attach `linkview.pro` or `www.linkview.pro` here. Those belong to the marketing site.

## Next production steps

This starter avoids the 404 and creates a professional low-touch entry point. Next steps:

1. Connect Supabase/Auth for real accounts.
2. Store organizations/trials/devices in DB.
3. Add license management.
4. Add installer download page.
5. Connect payment provider.
6. Add Terms of Use and Privacy links.
