# LinkView Instant Trial Thanks Page Patch

This patch replaces `app/thanks/page.tsx` with an instant-trial message.

The goal is to avoid language like "we will review and get back to you" and instead communicate:

- trial is ready immediately
- continue to download
- no sales call required
- user receives email confirmation
- responsible-use reminder

## Install

Copy the contents of this folder into the `linkview-app` project root.

Then run:

```powershell
npm.cmd run build
git add app/thanks/page.tsx README-INSTANT-TRIAL-THANKS.md
git commit -m "Update thanks page for instant trial"
git push
```
