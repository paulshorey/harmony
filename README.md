# Spiral Web Monorepo

This repo houses Spiral's web apps in one place to easily facilitate code sharing, global code standards, and a consistent developer experience.

## Notes

- **To install a new NPM package for one of the apps/packages, run `yarn add -W <package-name>` while inside the app/package directory.** _This will install the package in the root `node_modules` folder and symlink it to the app/package that needs it. This is a clever way to avoid duplicate packages in the `node_modules` folder._

## What's inside?

This [turborepo](https://turborepo.org) uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps ✨

- `consumer`: a [Next.js](https://nextjs.org) consumer banking app [(View)](https://github.com/SpiralFinancial/WebMonorepo/tree/integration/apps/consumer)
- `nonprofit`: a [Next.js](https://nextjs.org) nonprofit banking app [(View)](https://github.com/SpiralFinancial/WebMonorepo/tree/integration/apps/nonprofit)
- `cms`: a [Next.js](https://nextjs.org) charity content management app [(View)](https://github.com/SpiralFinancial/WebMonorepo/tree/integration/apps/cms)

### Packages 📦

- `ui`: Spiral web's React component library shared by all applications [(View)](https://github.com/SpiralFinancial/WebMonorepo/tree/integration/packages/ui)
- `config`: `eslint` `prettier` `storybook` `jest` `typescript` configurations shared by all apps/packages [(View)](https://github.com/SpiralFinancial/WebMonorepo/tree/integration/packages/config)
- `utils`: React hooks, helpers, and utilities shared by all apps/packages [(View)](https://github.com/SpiralFinancial/WebMonorepo/tree/integration/packages/utils)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities 🛠️

This repo has some additional tools already setup for you:

#### Testing
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Storybook](https://storybook.com) for UI previews, code snapshot testing, and image snapshot testing
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for testing React components in Jest
- [React Hooks Testing Library](https://react-hooks-testing-library.com/) for testing React Hooks in Jest
- [Apollo Mocked Provider](https://www.apollographql.com/docs/react/development-testing/testing/) for testing data fetching components with mock data
- [Cypress](https://www.cypress.io/) for end-to-end testing in a headless browser
- [BrowserStack](https://www.browserstack.com/) for testing in a variety of real browsers 

#### Linting
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Husky](https://typicode.github.io/husky/#/) for linting/formatting/testing on commit
- [Commit Lint](https://github.com/conventional-changelog/commitlint) for creating meaningful commit messages based on [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 

#### Automation
- [Git Actions](https://docs.github.com/en/actions) for testing before a Pull Request
- [Jenkins](https://www.jenkins.io/) for running automations with Cypress and BrowserStack
- [Standard Version](https://github.com/conventional-changelog/standard-version) for managing deployment tags and generating a changelog


## Getting Started 🏃

### Clone the repository

```sh
$ git clone git@github.com:SpiralFinancial/WebMonorepo.git

Cloning into 'WebMonorepo'
Receiving objects, done
Receiving deltas, done
```

### Install dependencies

```sh
$ yarn

info No lockfile found.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
✨  Done
```

### Build

To build all apps and packages, run the following command:

```
cd WebMonorepo
yarn build
```

To build a single app or package, run the following command:

```
cd apps/*
yarn build
```

### Develop

To develop all apps and packages, run the following command:

```
cd WebMonorepo
yarn dev
```

To develop a single app or package, run the following command:

```
cd apps/*
yarn dev
```

### Test

To test all apps and packages including snapshot testing, run the following command:

```
cd WebMonorepo
yarn test:ci
```

To test a single app or package, run the following command:

```
cd apps/*
yarn test:ci
```

To perform image snapshot updates on a single app or package, run the following command:

```
cd apps/*
yarn storybook
yarn test -u
```

### Lint and Format

To lint and form all apps and packages, run the following command:

```
cd WebMonorepo
yarn lint
```

To lint and format a single app or package, run the following command:

```
cd apps/*
yarn lint
yarn format
```

### Using Spiral Packages

Packages may be shared between all apps/packages in the repo. It's important to note that any global package changes may affect other apps.

All packages follow this naming syntax: `@ps/*package-name`

#### To include a package to your app, include it in your `package.json` dependencies like so:

```
"dependencies": {
    "@ps/ui": "*",
    ...
 }
```

#### To use a Spiral package, simply import your needed file:

```
import Button from '@ps/ui/src/components/common/atoms/Button'
...

```

#### To use a Spiral config package:

```
module.exports = require('@ps/config/prettier-preset');
```

## Committing To The Repo

This repo uses [Commit Lint](https://commitlint.js.org/#/) to enforce commit syntax in the following format:

```
type: build chore ci docs feat fix perf refactor revert style test
scope (app/package): cms consumer nonprofit ui utils config
message: your git commit message
issue (Jira issue): SW2-123
```

This means that to commit you must add a commit message matching this format:

```
type(scope): message (SW2-1234)

ie. feat(consumer): added new feature (SW2-123)
```

Also included is a yarn script that can be run from the root of the app to walk you through:

```
yarn commit

```

## Core Branches 📍

Each app has core branches used to facilitate moving code from integration to QA/Staging to production environments.

### Summary

Code needed for each app stage will flow like this:

`integration` ➡️ `*app-staging` ➡️ `*app*-uat` ➡️ `*app*-production`

Every time we merge from `integration` a "snapshot" of the repo at that time will be available on the next branch.

This allows us to continually develop on integration as a team, while ensuring no unexpected code changes are made to a higher tier branch (staging/uat/prod).

### Shared By All (Trunk Branch)

- `integration`

### Consumer Banking

- `consumer-staging`
- `consumer-uat`
- `consumer-production-rollback`
- `consumer-production`

### Nonprofit Banking

- `nonprofit-staging`
- `nonprofit-uat`
- `nonprofit-production-rollback`
- `nonprofit-production`

### CMS

- `cms-staging`
- `cms-uat`
- `cms-production-rollback`
- `cms-production`

## Deployment 🚀

Our deployment process involves generating a changelog, a unique version, and escalating those changes through our development stages/environments.

Note: Integration branch is our [trunk](https://trunkbaseddevelopment.com/branch-for-release/) branch which all code committed to the repository enters through. From there, code may be merged into any of the core branches or a feature branch as needed.

We should avoid making direct commits or PRs to any other branch and instead cherry-pick as needed.

For detailed deployment instructions, see [DEPLOYMENT](https://github.com/SpiralFinancial/WebMonorepo/DEPLOY.md)


## Deploying To Amplify

Below is an example build script used by Amplify.

This includes Next JS build caching, as well as `node_modules` caching.

To get started, replace all instances of "consumer" with the name of your app.

```
version: 1
applications:
  - frontend:
      phases:
        preBuild:
          commands:
            - yarn
        build:
          commands:
            - cd ../..
            - npx turbo run build --scope=consumer --include-dependencies --no-deps
            - cd apps/consumer
      artifacts:
        baseDirectory: .next
        files:
          - '**/*'
      cache:
        paths:
          - apps/consumer/node_modules/**/*
          - apps/consumer/.next/cache/**/*
          - node_modules/**/*
    appRoot: apps/consumer
```

## Useful Links 💪

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/features/pipelines)
- [Caching](https://turborepo.org/docs/features/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/features/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
