# Kanban board

Create a GitHub Project (**Projects tab > New project > Board**) with these columns, in this order:

| Column | Meaning |
|---|---|
| Backlog | "Up next" tasks that are not assigned yet |
| In-Progress | Tasks assigned to you, and revisions after review |
| Blocked | You cannot continue for any reason. Say why in a comment and ping the lead in Discord |
| In Review | You opened a PR and are waiting for review |
| Done | Merged, and meets the definition of done |

Recommended automation (Project settings > Workflows): turn on **Item added to project** (set to Backlog), **Pull request merged** (set to Done) and **Item closed** (set to Done).

Create one issue per ticket using the **Ticket** template, and add it to the project. `docs/tasks.md` lists the first round of tickets.
