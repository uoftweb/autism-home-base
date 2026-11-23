# One-time GitHub setup (project lead)

Some requirements live in GitHub settings, not in files. Do these once after pushing this code.

## 1. Main branch protection

Repository > **Settings > Branches > Add branch ruleset** (or *Add classic branch protection rule*) for `main`:

- [x] Require a pull request before merging
  - [x] Require approvals: **1**
  - [x] Dismiss stale pull request approvals when new commits are pushed
  - [x] Require review from Code Owners
- [x] Require status checks to pass before merging
  - Search for and add the check named **lint-and-build** (it only appears after the CI workflow has run once, so open a first PR)
  - [x] Require branches to be up to date before merging
- [x] Block force pushes
- [x] Restrict deletions
- [x] Do not allow bypassing the above settings (include administrators)

Note: branch protection on a *private* repository requires a paid GitHub plan (Pro, Team or Enterprise); it is free on public repositories and for organizations on the Team plan.

## 2. Merge settings

Settings > General > Pull Requests: allow **Squash merging** only, and enable **Automatically delete head branches**.

## 3. Kanban board

Follow `docs/kanban.md`, then create the four tickets from `docs/tasks.md` using the Ticket issue template.

## 4. CODEOWNERS

Edit `.github/CODEOWNERS` and replace `@your-github-username` with the lead's username.

## 5. Deploy (when ready)

Import the repository in Vercel and add the variables from `.env.example` in Vercel's project settings.
