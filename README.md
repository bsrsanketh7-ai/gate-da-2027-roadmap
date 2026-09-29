# GATE DA 2027 Roadmap

A 19-week study plan for GATE DA (Data Science & Artificial Intelligence) 2027. It runs from 26 September 2026 to the February 2027 exams and covers the full official syllabus.

- Tick topics off week by week.
- Sign in with email and password (Google is optional). Your ticks sync to your account across devices.
- Includes key dates, the paper pattern, score targets, marks per subject from the 2024–26 papers and free resources.

Plain static files with no build step: `index.html` (the roadmap), `login.html`, `config.js` and `auth.js`. Supabase handles accounts and storage.

## Setting up sign-in (one time, about 10 minutes)

1. **Create a Supabase project.** Sign up at https://supabase.com, click **New project** and pick the free plan. Choose the Mumbai region if it's offered.
2. **Create the table.** Open **SQL Editor → New query**, paste everything from `supabase/schema.sql` and click **Run**. This creates the `progress` table and the rules that let each person see only their own row.
3. **Copy your keys.** Open **Project Settings → API Keys** (on older dashboards, **API**) and copy:
   - the **Project URL**
   - the **publishable key** (older projects call it the `anon` `public` key)

   Paste both into `config.js`. **Never use the `service_role` / secret key.**
4. **Allow your site's address.** Open **Authentication → URL Configuration**:
   - Site URL: `https://gate-da-2027-roadmap.vercel.app`
   - Redirect URLs: add `https://gate-da-2027-roadmap.vercel.app/**`. If you test locally, also add `http://localhost:5174/**`.
5. **Push to `main`.** Vercel redeploys automatically.

New accounts get a confirmation email by default. To turn that off while testing, go to **Authentication → Sign In / Providers → Email → Confirm email**.

### Optional: "Continue with Google"

1. In Google Cloud Console, create an OAuth client of type **Web application**. Set its authorised redirect URI to the callback URL shown in Supabase under **Authentication → Sign In / Providers → Google**.
2. Paste the client ID and secret into that Supabase Google provider screen and enable it.
3. Set `googleSignIn: true` in `config.js`.

## Running locally

Any static server works, for example:

```bash
npx serve -l 5174 .
```

Then open http://localhost:5174/login.html.
