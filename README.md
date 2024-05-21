# The Dog House | Micro Frontend Demo

### WORK IN PROGRESS

This repository contains 3 micro frontend packages, `shell`, `ui`, and `products`. 
I use `@originjs/vite-plugin-federation` to orchestrate the micro frontend remotes and exposure. 

**Important Note**
There are 2 separate apps in the repository. I am currently in the middle of merging my initial implementation with another more robust and complex implementation.

## Tech Stack and Tools

#### FRONTEND

- React
- TypeScript
- Vite
- Chakra UI
- TanStack Query
- Zustand

#### BACKEND / DEV ENVIRONMENT

- Testing Library
- Vitest
- MSW
- ESLint
- Prettier
- Million

## Getting Started

#### PREREQUISITES

You need to install `pnpm` globally. Before starting the `shell` host web application you need to start the `ui` and `products` micro frontends first.

#### STEPS

From the root directory of the repository run the following commands in 3 separate consoles:

**ui**

```js
cd ui
pnpm install
pnpm run build
pnpm run start
```

**products**

```js
cd products
pnpm install
pnpm run build
pnpm run start
```

**shell**

```js
cd shell
pnpm install
pnpm run build
pnpm run start
```

## Cross App and Component Communication

The products micro frontend has a Content component that emits customer and order created events which are subscribed and listened for in the shell micro frontend.
You can click those buttons and you will see new events and messages show up in the shell web application in real time.
This is happening from a custom library called eventBus.ts that uses the pub/sub pattern. Its located in the shell app under the lib directory.
