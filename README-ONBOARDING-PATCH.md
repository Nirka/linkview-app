# LinkView App Onboarding Patch

Adds:
- app/thanks/page.tsx
- app/download/page.tsx

Also update your register form to redirect to `/thanks` after successful submission.

Suggested change in the register component after the API call succeeds:

```ts
window.location.href = "/thanks";
```

If using Next router in a client component:

```ts
router.push("/thanks");
```
