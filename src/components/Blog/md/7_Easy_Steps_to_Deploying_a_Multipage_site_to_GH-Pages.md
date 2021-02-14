My final assignment before graduating was to create a portfolio site to display my projects. I chose to create a Node application with react components. I then planned to publish my site on GH Pages. Here are the steps I took to publish my multiple page site. I have also created a Demo Application that you can download to follow through my explanation; https://github.com/jenPlaza/demoApp.

## Step 1: New Remote & Local Repository on GItHub

I first created a new EMPTY PUBLIC remote repository on GitHub. I then cloned the empty remote to my pc. I opened my new local repository, created an empty commit, and pushed back to my remote.

$ git clone https://github.com/jenPlaza/demoApp.
$ git commit --allow-empty
$ git push

## Step 2: Download JavaScript(JS) environment

Now that you have your remote and local branches in sync, we can download Node, NPM, and React. To install the JS environment Nodejs use the brew install; to install NPM use the npm install. Don’t forget to add a gitignore file, to ignore node modules.

$ brew install node
$ npm i npm-install
$ touch .gitignore

## Step 3: Create React App

Now that we have downloaded Node and NPM, lets create the React Application and initialize the start.

$ npx create-react-app demoApp
$ cd demoApp
$ npm start

## Step 4: Download React Libraries

React-router-dom contains the binding that will allow us to bind our routes which render our navigational links. GH-Pages will be our host server that will publish our web site. These are the last two packages we need to download; in order, to get our routing binded and published to GH-Pages.

$ npm i react-router-dom
$ npm install gh-pages --save-dev.

## Step 5: Modify Package.json file

Let’s now modify the package.json file to add a homepage link and deployment scripts. You can add the homepage link as your very first entry. It should look like this…

"homepage": https://jenplaza.github.io/demoApp.

To your scripts, you need to add a predeploy and a deploy script. Make sure your script entries looks like this…

"scripts": {
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
},

## Step 6: Create React Components

Now we are ready to add our components. To the src folder, I have added a components folder (this folder includes the header component) and a pages folder (this folder includes the home, blog, and about pages).

Let’s begin by modifying the App.js page. To this page I added the Header and Routes component. I decided to use BrowserRouter as Router, Switch, and Route from react-router-dom. Each Route path includes an exact path. Your entries should look something like this…

< Route exact path={process.env.PUBLIC_URL + '/'} component={Home} / >.

For the Header I created a Navigation which includes a toggle button; it will hide navigational items, on extra small devices. I used a Reactstrap navbar, but you can also use react-bootstrap navbars. Here are links that provide examples on navbars; for Reactstrap navbars go to https://reactstrap.github.io/components/navbar/ ; for React-Bootstrap navbars go to https://react-bootstrap.github.io/components/navbar/.

HERE IS THE SECRET TO NOT GETTING 404 ERRORS, when publishing your multipage website on gh-pages. The React Router API gives us the three components we will be using, for our navigational links; < Router >, < Link >, and < Route >. With the < Router > tags, we in sync the UI to the URL. The < Link > tags are used to create the navigational items (such as home, about, and blog. The < Route > tags are used to render the UI component to the specific navigational URL. Because we are using BrowserRouter the hyperlink tag < a > will not work, resulting in 404 errors upon publishing. My navigational links are encapsuled by < NavItem > tags imported from reactstrap. My entries look something like this…

< NavItem > < Link to="/demoApp/" > Home < /Link > < /NavItem >.

Now that we have created our header and routes components, lets create the / home, / blog, and / about pages. Each of these pages include a dummy component function returning an < h1 > tag with the page title. I used makeStyles from Material-UI Core to add styling. I like using makeStyles because it allows you to design, keeping mobile first in mind.

## Step 7: Deploy and Publish

When you are ready to deploy your app to gh-pages, use $ npm run deploy.

THAT’s IT!
