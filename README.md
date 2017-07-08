# Grab n' Go Redux Starter

## About
In looking for React/Redux boilerplates, I found myself wasting more time rather than being productive. So, I decided to make a config-light, development-ready boilerplate.

## Installation

Install the dependencies and devDependencies and start up the server

```sh
$ npm i
$ npm run dev
```

## Testing

```
$ npm run test
```

## Production

```
$ npm run build
```

## Technologies

| Module | Reason |
| ------ | ------ |
| React/Redux | UI, flux architecture for client data |
| React-Router (v4) | Dynamic routing |
| Redux Form | Heavy lifting for form functionalities |
| Redux Thunk | Allow multiple action dispatchings |
| Enzyme/Chai | Testing |
| Axios | HTTP |
| Webpack Dev Server | Compile & testing scripts |
| Radium | Component Styling |
| Eslint (AirBnb) | Keep code clean & standard |

## Conventions

### Separation of Dumb & Smart Components

All dumb components essentially should not know what your application pertains to. They should only accept props and possibly keep some sort of uncontrolled state.

Containers, on the other hand, can manipulate or hold state. Additionally, containers can have child components that are also either containers OR are very app-specific components.

### First-class Testing

Testing is done on a per-component basis. So, every ```YourComponent.js``` should amass a ```YourComponent.test.js``` file. The testing script looks for all ```*.test.js``` files. The testing suite is fairly light right now, with the aim of making it more robust.

### Redux Actions/Types

For actions, I feel it is best to have a single place of export for both your types and actions. I believe it gives you a lot of choice and productivity benefits.

For example, you can make a file ```userActions.js```. Then, in ```index.js```, you can do the following:

```
export * from './userActions'
```

Now, you can ingest actions hollistically or piecewise.

An example of an import in your container:

```
import * as actions from './actions'
```

Or

```
import { oneAction, another } from './actions'
```

### Redux Reducers

Here, the aim is to make specific reducer files, and then funnel them through ```index.js```. Your types will come from the ```./actions/types``` file.

## Todos

 - Test suite improved setup
 - File Generators

## Liscence

MIT
