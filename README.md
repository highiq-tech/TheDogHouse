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

The `shared-state` micro frontend has an event bus and pub/sub library which emits customer and order created events that are subscribed to in the shell micro frontend.

Click the action buttons in the `shell` to see custom events and emitted messages show up in the shell web application in real time.
