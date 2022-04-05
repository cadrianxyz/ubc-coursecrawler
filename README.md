[![Netlify Status](https://api.netlify.com/api/v1/badges/02608c78-070c-4cab-8281-041e9e877828/deploy-status)](https://app.netlify.com/sites/ubc-coursecrawler/deploys)

# ubc-coursecrawler
Web application for UBC Coursecrawler. The backend counterpart is [here](https://github.com/ad2969/ubc-coursecrawler-api)

> **Status** - Prototype. See the [releases](https://github.com/ad2969/ubc-coursecrawler/releases) for a list of releases and their changelog.

> **Technology Stack** - NextJs, Netlify

Libraries used in this app:
- Graphing via `react-d3-tree`
- Component Styles via `tailwindcss`
- HTTP Requests via `fetch` (switch to `axios`?)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development. See [development](#development) for best practices/specific notes on the repository and see [deployment](#deployment) for notes on how to deploy the project onto the live system.
### Prerequisites

- Node.js v17 (npm v8) (Download [here](https://nodejs.org/en/download/))
- EsLint v6.8 (Setup Instructions [here](https://eslint.org/))

### Installation

1. Clone the repository: ```git clone```
2. Install the packages: ```cd ubc-coursecrawler``` and ```npm install```
3. Setup the [environmental files](#environmental-files)

### Running

Start the web app by running

```npm run dev```

This should open a browser tab with the URL: "http://localhost:3000". The port 8000 may differ if you are running multiple instances of the app, but in general 300x. If a browser tab isn't opened, simply look through the logs on the CLI to find the address.


## Development

Development is recommended to be done on a system where [eslint](https://eslint.org/) is installed, and using [VSCode](https://code.visualstudio.com/)

### Linting

Linters are put into place to exercise good and consistent coding style, regardless of developer. Editing lint rules and such can be done by changing the `.eslintrc.json` file, which is not recommended until approved by lead developers of the team.

### Environmental Files

Dotenv files (`.env.*`) are not included in the repository. They contain sensitive variables that are important for running the API. If it's your first time, request them from one of the [repository moderators](#repository-moderators).

### Files and Services

- Pages are located in `pages/*`, while custom-created components are located in `components/*`
- Requests to the backend are made through functions in the `data/*` files
- Any miscellaneous functions are located in `utils/*` and any miscellaneous constants are located in `constants/*`
- Global styles are located in `styles/*`


### Deployment

The application is currently built on Netlify for live viewing/testing. Deploys to netlify can be triggered by creating Github Releases on the repository. This will run a production workflow that has been pre-configured. Read up on [creating releases on Github](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)


Document the changes in each release with as much detail as possible. Name releases using the following format:
```
v1.0.0
```
Release versioning will follow concepts specified by Tom Preston-Werner's [semver](https://semver.org/)


## Scripts

- `$ npm start` - Runs the applicationin production mode, which requires `next build` to be run first to generate an optimized production build

- `$ npm run dev` - Runs the applicationin development mode with hot-code reloading and error reporting

- `$ npm run build` - Compiles the application and creates an optimized production build, information is output at the same time

- `$ npm run lint` - Runs linter and identifies styling inconsistencies based on the configurations in `.eslintrc.json`

- `$ npm run lint-fix` - Runs linter and automatically fixes styling inconsistencies based on the configurations in `.eslintrc.json`


## Contributing
Everyone is encouraged to make useful contributions to the project. Instructions to start contributing are as follows:

1. Clone and setup the repo into your local environment (instructions [here](#getting-started))
2. Draft out the changes to be made and discuss with one of the moderators (ideally, [start an issue](https://github.com/ad2969/ubc-coursecrawler/issues) or pick an existing one)
3. Make the appropriate edits and additions in a new branch (use a unique name in *kebab-case*, see [naming conventions](https://namingconvention.org/git/branch-naming.html))
4. Submit a pull request with a detailed description of the changes that were made
--> Pull requests will be accepted after being reviewed and after appropriate testing
5. After merging to `main`, [deploy](#deployment) the application as a new version.

### Repository Moderators

* @ad2969
