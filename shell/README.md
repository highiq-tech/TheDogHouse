# The Dog House | Shell Micro Frontend

This micro frontend is the main React web application. The `shell` micro frontend references the other micro frontend apps, components and libraries using vite-plugin-federation remotes.

## Getting Started

PREREQUISITES

Start the `ui` and `shared-state` micro frontends first in there own console window.

STEPS

From the root directory of the repository run the following commands in a sepearte console:

- `cd shell`
- `pnpm install`
- `pnpm run build`
- `pnpm run start`

NOTE: The `shell` micro frontend runs locally on http://localhost:5002

## Demo

Click the Add New Customer and Add New Order buttons in the homepage to emit event data from the `shared-state` micro frontend which is listened and subscribed to in the `shell` React web application in real time.

Click on the plus/minus button in the footer to see how to share data changes between the header and footer components in real time with the use of the signals library.

## Micro Frontend Functionality

The `shell` app references components from the `ui` micro frontend and demos how to do cross app and component communication using state management and pub/sub libraries from the `shared-state` micro frontend.
