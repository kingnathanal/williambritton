# William Britton Portfolio

Personal portfolio for [Will Britton](https://www.williambritton.dev), a Staff Software Engineer focused on cloud platforms, Kubernetes, and developer enablement.

The current experience uses the **Quiet Systems** design direction: a focused, editorial portfolio that highlights platform engineering work, skills, career history, research, and side projects. The previous Vue 2 site is preserved as a static archive at [`/v1/`](https://www.williambritton.dev/v1/).

## Live Sites

- [williambritton.dev](https://www.williambritton.dev)
- [williambrittonjr.com](https://williambrittonjr.com)
- [Original portfolio archive](https://www.williambritton.dev/v1/)

## Stack

- Vue 3 and Vue Router 4
- Vite 8
- ESLint and Prettier
- Azure Static Web Apps via GitHub Actions

## Getting Started

Requires Node.js `20.19+` or `22.12+`.

```sh
npm install
npm run dev
```

The development server runs at `http://localhost:5173` by default.

### Useful Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create the production bundle in `dist/`. |
| `npm run preview` | Serve the production bundle locally. |
| `npm run lint` | Fix lint issues across the project. |
| `npm run format` | Format source files with Prettier. |

## Project Structure

```text
src/
  data/profile.js       # Portfolio content: experience, skills, projects, links
  views/                # Quiet Systems and alternate concept routes
  router/               # Application routes
public/
  v1/                   # Prebuilt archive of the original Vue 2 portfolio
```

Update portfolio content in `src/data/profile.js`; keep layout and presentation changes in the relevant view under `src/views/`.

## Deployment

Pushes to `master` trigger the Azure Static Web Apps workflow at `.github/workflows/azure-static-web-apps-calm-island-0ad3a6310.yml`. The workflow runs `npm run build` and deploys `dist/`.

Pull requests targeting `master` automatically receive a preview deployment. Production is deployed only after merging to `master`.

## Legacy Archive

`williambritton_v1/` retains the original Vue 2 source for historical reference. Its compiled output is copied to `public/v1/`, which Vite includes in the deployed site.

The legacy app is intentionally isolated from the modern build. Update it only when you deliberately need to refresh the archive, then rebuild it and copy its output to `public/v1/`.
