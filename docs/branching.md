# Branching strategy

We use a simple feature-branch workflow.

## Rules

1. `main` is always working. Vercel deploys from it. **Nobody pushes to `main` directly**; branch protection blocks it.
2. One branch per ticket.
3. Name branches `type/short-description` in lowercase with hyphens:

   * `feature/login-page`
   * `fix/calendar-overflow`
   * `docs/readme-setup`
4. Commit messages are short and in the present tense: `Add week switcher to calendar`.

## Step by step

```bash
git checkout main
git pull                              # always pull first
git checkout -b feature/login-page    # make your branch

# ...do your work, then...
git add .
git commit -m "Add login form layout"
git push -u origin feature/login-page
```

Then on GitHub:

1. Click **Compare \& pull request** and fill in the template.
2. Move your Kanban card to **In Review**.
3. The lead reviews. If changes are requested, move the card back to **In-Progress**, fix, and push to the same branch.
4. After approval, merge with **Squash and merge**, then delete the branch.

## Merge conflicts

If GitHub says your branch has conflicts, ask for help in Discord before guessing. Two people editing the same file is the usual cause.

