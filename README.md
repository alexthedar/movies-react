## Run locally:

```
git clone https://github.com/alexthedar/movie-react.git
cd movie-react
npm install
npm run start
```

To run app with redux logger display in browser dev tools console use the following command:

```
npm run start:logger
```

## Test

To run testing once with a coverage report use the following command:

```
npm run test:coverage
```

To run test with --watch command use the following command.

```
npm run test
```

### Acceptance Criteria

1. Allow a user to be able to search for a movie given a search string
2. Manage the storage and retrieving of data using Redux
3. Display results in a grid format
4. Create production quality code
5. Return a link to a repo of code
6. BONUS POINTS - Make the UI more attractive

### Notes

- .env.development.local has been retained to hold key only for evaluation purposes else it would be added .gitignore
- UI testing through puppeteer or cypress has not been implemented because not in scope plus app is small enough that all aspects can be manually tested
- unit tests are in the test folders next to each component / file that is being tested.
- responsive table has been implemented based on specifications of design document but would not recommend because of layout problems on smaller devices.
- New pages are loaded into store so they do not have to be loaded in again.

---

### Stocks-react

This project uses parts recycled from my [stocks-react](https://github.com/alexthedar/stocks-react) repo. Stocks-react uses the iex api to GET and display top 100 stocks on the iex market. It also allows the user to search for stocks using stock symbols.

---

### Create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This project only uses the start and test react-scripts that come included with create-react-app however CRA includes build and eject as well. I have included the 'create-react-app' below for reference.

### Available create-react-app Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
