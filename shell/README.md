# The Dog House | Shell Micro Frontend

This micro frontend contains host `shell` app, components and event bus library. The `shell` references the other micro frontend apps, components and libraries using vite-plugin-federation remotes.

## Getting Started

PREREQUISITES

Start the `ui` and `shared-state` micro frontends first in there own consoles.

STEPS

From the root directory of the repository run the following commands in a sepearte console:

- `cd shell`
- `pnpm install`
- `pnpm run build`
- `pnpm run start`

NOTE: The `shell` micro frontend runs locally on http://localhost:5001

## Micro Frontend Functionality

The `shell` app references components from the `ui` micro frontend and demos how to do cross app and component communication using state management and pub/sub libraries from the `shared-state` micro frontend.
