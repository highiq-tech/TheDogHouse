# Product Listing Micro Frontend

This micro frontend contains host Shell app, components and pub/sub library. The Shell references the other micro frontend apps and components using vite-plugin-federation remotes.

## Getting Started

PREREQUISITES

Start the `ui` and `products` micro frontends first in there own consoles.

STEPS

From the root directory of the repository run the following commands in a sepearte console:

- `cd shell`
- `pnpm install`
- `pnpm run build`
- `pnpm run start`

## Micro Frontend Functionality

This app receives emitted events from the Product Listing micro frontend using a pub/sub library.
