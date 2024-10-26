# SpaceX Energy Tracker 🚀

A tracker for SpaceX launch energy use.

## Description

This application shows SpaceX launches. Each launch is represented by its mission name. Users can scroll through the list to see different launches and select up to 10 launches to compare energy consumption.

## Energy Calculation

> The estimated energy can be calculated using some simple assumptions:
>
> - The consumed energy depends only on the mass of the rocket that was used for the launch + the mass of the fuel
> - It costs about 15 kg of fuel bring 1 kg of mass to the Lower Earth Orbit
> - The fuel has an energetic value of 1.35\*10^7 Joules / kg

Source: [Sensorfactdev GitHub](https://github.com/Sensorfactdev/frontend-assignment-spacex)

## API used

- [SpaceX GraphQL API](https://spacex-production.up.railway.app/graphql)

## Technologies Used

- React (bootstrapped with Create React App)
- TypeScript
- GraphQL
- Apollo Client
- GraphQL Code Generator (codegen)
- ApexCharts (react-apexcharts)
- Material-UI (MUI)

## To-Do List

- [ ] Filter data by user permission
  - [ ] Mock user permission
  - [ ] Query differnt data based on permission
- [ ] Increase usability
  - [ ] Maybe group launches by rocket type
  - [ ] Add sorting, filters & search for launch list
- [ ] Implement pagination
- [ ] Increase maintainability
  - [ ] save api url in .env
  - [ ] outsource some variables into overview config file (e.g. max-selection value)
- [ ] Add testing
- [ ] Review performance
  - [ ] Cache calculated energy consumption
- [ ] Review accessibility

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Run `npm install` to install dependencies

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run generate`

Generates TypeScript types for GraphQL queries and mutations using GraphQL Code Generator.

### `npm run watch`

Runs the GraphQL Code Generator in watch mode, automatically regenerating types when GraphQL files change.
