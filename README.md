# Getting Started with Inventory Management System

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setting up local backend

- On the terminal, navigate to `caselet_files/Backend/` directory

- Create virtual environment

  ```sh
  python -m venv venv
  ```

- Activate virtual environment with

  ```sh
  source venv/bin/activate
  ```

- Run Script for installing dependencies

  ```sh
  pip install -r requirements.txt
  ```

- Run the backend application with

  ```sh
  python app.py
  ```

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

## Running Sonarqube analysis locally

- Run Sonarqube server in Docker

  ```sh
  docker run -d --name sonarqube -p 9000:9000 -p 9092:9092 sonarqube
  ```

- Access Sonarqube in `http://localhost:9000/` and login with default user `admin` with password `admin`

- Create project with name and key `promotions-management-frontend`

- In `run_analysis.sh` Replace `-Dsonar.login` value with a new token generated in your local Sonarqube.

- Install [Sonarqube Scanner](https://docs.sonarqube.org/latest/analyzing-source-code/scanners/sonarscanner/).

- Run command below to run tests and generate Sonarqube analysis

  ```sh
  bash run_analysis.sh $PATH_TO_SONARSCANNER_BINARIES
  ```

  `$PATH_TO_SONARSCANNER_BINARIES` usually looks like /Users/{USER}/Downloads/sonar-scanner-{VERSION}-{OS}/bin
