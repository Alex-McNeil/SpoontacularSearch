# Spoontacular Search

This project is designed to make use of the Spoontacular API to search for recipes and list their details on an information page. It uses Material-UI for it's component library and React Router for the page routing needs. This project would become more scalable with a better API parsing library added to it instead of using fetch, but given the lightweight nature of the project, it will just use fetch for now. Should the need for global state ever arise, a state management system such as Redux could be added but that is unnecessary at this time.

*Note: This project contains the api key for spoontacular within it, this is normally a HUGE security risk and not an acceptable coding practice, but as this is just an example project with no back-end and React allows access to environment variables in it's builds, there is no good way to hide this key in a secure way.* 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.