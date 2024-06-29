# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Husky and lint-staged setup

```
PS D:\Dev Projects\scavenger-hunt\virtual-scavenger-hunt> git commit -m "testing setup working"
[STARTED] Preparing lint-staged...
[COMPLETED] Preparing lint-staged...
[STARTED] Running tasks for staged files...
[STARTED] package.json — 17 files
[STARTED] src/**/*.{js,jsx,ts,tsx} — 9 files
[STARTED] prettier --write
[COMPLETED] prettier --write
[STARTED] eslint --fix
[COMPLETED] eslint --fix
[COMPLETED] src/**/*.{js,jsx,ts,tsx} — 9 files
[COMPLETED] package.json — 17 files
[COMPLETED] Running tasks for staged files...
[STARTED] Applying modifications from tasks...
[COMPLETED] Applying modifications from tasks...
[STARTED] Cleaning up temporary files...
[COMPLETED] Cleaning up temporary files...
[master 6ead8b9] testing setup working
 17 files changed, 14132 insertions(+), 9299 deletions(-)
 create mode 100644 .babelrc
 create mode 100644 .husky/pre-commit
 create mode 100644 __mocks__/fileMock.js
 create mode 100644 __mocks__/styleMock.js
 create mode 100644 jest.config.js
 create mode 100644 src/components/ItemList/ItemList.test.tsx
 rewrite src/components/ItemList/ItemList.tsx (73%)
 create mode 100644 src/components/ScoreList/ScoreList.test.tsx
 create mode 100644 src/components/ScoreList/ScoreList.tsx
 create mode 100644 src/jest-setup.ts
 create mode 100644 src/types/index.ts
```
