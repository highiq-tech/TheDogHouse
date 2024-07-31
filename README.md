# The Dog House | Micro Frontend Demo

### WORK IN PROGRESS

This repository contains 3 micro frontend packages, `shell`, `ui`, and `shared-state`.
I use `@originjs/vite-plugin-federation` to orchestrate the micro frontend remotes and exposure.

## Tech Stack and Tools

#### FRONTEND

- React
- TypeScript
- Vite
- Chakra UI
- Signals
- Zustand

#### STATE MANAGEMENT & CROSS APP COMMUNICATION

- Signals
- Pub/Sub
- Event Bus

#### DEV ENVIRONMENT

- ESLint
- Prettier
- Million

## Getting Started

#### PREREQUISITES

You need to install `pnpm` globally. Before starting the `shell` host web application you need to start the `ui` and `shared-state` micro frontends first.

#### STEPS

From the root directory of the repository run the following commands in 3 separate consoles:

**shared-state**

```bash
cd shared-state
pnpm install
pnpm run build
pnpm run start
```

**ui**

```bash
cd ui
pnpm install
pnpm run build
pnpm run start
```

**shell**

```bash
cd shell
pnpm install
pnpm run build
pnpm run start
```

## Cross App and Component Communication

The `shared-state` micro frontend exposes an event bus and pub/sub library that emits event data that are available for a web application or backend api to subscribed to.

The `ui` micro frontend exposes header and footer React components that are available to be referenced and embedded in a React web application.

The `shell` micro frontend is a React web application that references libraries and components from `shared-state` and `ui` micro frontends.
