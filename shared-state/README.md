# The Dog House | Shared State Micro Frontend

This package provides shared state for the other micro frontend apps. It contains Signals, Pub/Sub and Event Emitter data services.

This micro frontend contains demo apps, signals state mangement, pub/sub library and event bus library. It is referenced by other micro frontend apps using vite-plugin-federation expose.

## Getting Started

STEPS

From the root directory of the repository run the following commands in a sepearte console:

- `cd shared-state`
- `pnpm install`
- `pnpm run build`
- `pnpm run start`

NOTE: The `shared-state` micro frontend runs locally on http://localhost:5003

## Demo

This micro frontend provides 3 demo pages that show the user different techniques for handling cross component communication and sharing state between applications.

After clicking on the Login button you will be presented with three demo pages.

1. Event Emitter - This demo uses the eventBus library
2. Pub/Sub - This demo uses the pubSub library
3. Todo - This demo uses the Signals and Zustand state management libraries
