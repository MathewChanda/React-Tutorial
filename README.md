## What is React
React.js is a flexible JavaScript library for building user interfaces. It lets you create complex UIs from small pieces of code called components. React allows developers to create large web applications that can change data, without reloading the page.


## React Helpful Links and Required Installation
These are some helpful links to reference for information on ```React``` and ```NodeJS```
* [NodeJS](https://nodejs.org/en/ "NodeJS")
* [Create a New React App](https://github.com/facebook/create-react-app "Create a New React App")
* [Additional information and troubleshoot about React and its necessary tools](https://reactjs.org/tutorial/tutorial.html)

1. To begin working with React, [please visit this link and install NodeJS (the latest LTS version for your OS) on your local computer](https://nodejs.org/en/) and [Create-React-App CLI program](https://github.com/facebook/create-react-app "Create a New React App")

### Clone Your Personal Repo...
We would recommend creating a personal repo for this project. We have a template repo that we are providing to you, which has a directory structure that is also recommended for you to follow.  
If you would not like to use a GitHub repo, you are free to use a local directory with a similar directory structure.

2. Run the following command to create React app. 
```
npx create-react-app my-app
cd my-app
```

3. Run the following command to run React app locally on localhost:3000
```
npm install
npm start
```
 
### Or Clone Our Template Repo 
Clone this template repo. Please **DO NOT CLONE TO THE SAME DIRECTORY FROM ABOVE** as this will make it hard to work on the next part!

2. Run the following command to clone our template repo with the existing React app.
```
git clone https://github.com/PackHacks/JobSearcherDev
```

3. Run the following command to run React app locally on localhost:3000
```
npm start
```

## What are the files in a React project? 
* **node_modules** - Folder of necessary files and packages for your React App 
* **App.js** - The main React component that the browser will use to display your frontend 
* **App.css** - The styling for the React component from App.js 
* **package.json** - A file that shows packages or dependencies used in your project 
* **index.js** - Purpose is to mount your React component to [virtual-dom](https://www.codecademy.com/articles/react-virtual-dom)

## Installing Packages to use other public React components 
NPM stands for Node Package Manager, which is responsible for installing and managing packages. 
```
npm install @material-ui/core 
```

## What are components? 
We will be building components, which are parts of the UI split into independent and reusable pieces. React components enable us to think about each piece of our application in isolation. Components can be made up of  HTML elements, JavaScript code, or custom CSS styles. 
  - We have two types of components: 
    - **Function Components:** Components that contain immutable data or props 
    - **Class Components:** Components that contain mutable data or state  

# Glossary
Below are some terms and jargon that are unique to React and are used thoughout our guide. We explain them briefly here, but if you would like to know more there are links to some great resources that go into more detail.
* [DOM](https://bitsofco.de/what-exactly-is-the-dom/): The Document Object Model (DOM for short) is an interface that represents how the HTML and XML documents are read by the browser. After the browser reads the HTML documents (like a wesbite for example), it creates a tree like structure of all the HTML elements in the document.
* [VDOM](https://programmingwithmosh.com/react/react-virtual-dom-explained/): A representation of the DOM (essentially a copy of the actual DOM). React uses the VDOM because it can manipulate it faster than the actual DOM. Any changes made to the VDOM are then reflected in the actual DOM, thus updating the website.
* [export](https://medium.com/@baintonw/importing-and-exporting-in-react-91bf7c3e5e45): You can export a function, variable, or component from a file so that it may be used in other components/files.
* [API](https://medium.com/swlh/api-for-dummies-232a5a48f950): An API (Application Programming Interface) is a set of functions that allows applications to access data and interact with external software components, operating systems, or microservices. To simplify, an API delivers a user response to a system and sends the system's response back to a user.
* [JSON](https://developers.squarespace.com/what-is-json#:~:text=JSON%2C%20or%20JavaScript%20Object%20Notation,content%20created%20with%20the%20CMS.): JSON is a readable and easily parsable data format that mimics JavaScript objects. It is often used to pass data between a server/API and a web application.
* [Components](https://www.w3schools.com/react/react_components.asp): Components are parts of the webpage UI split into independent and reusable pieces. The are built from HTML elements, JavaScript code, and CSS styling.
* [Callback functions](https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/): A callback function is an executable block of code that is passed in as an argument to another function or stored as a variable.
* [React lifecyle method](https://programmingwithmosh.com/javascript/react-lifecycle-methods/#:~:text=What%20are%20React%20lifecycle%20methods,birth%2C%20growth%2C%20and%20death.): A method that is triggered upon a certain stage within a React component's lifecycle. A component's lifecycle includes the time it was initialized, displayed, and terminated.
* [props](https://www.w3schools.com/react/react_props.asp): Any data that you pass to a functional component (where the functional component **cannot** change the data).
* [state](https://reactjs.org/docs/state-and-lifecycle.html): Any data that you pass to a class component (where the class component **can** change the data).
* [Hook](https://reactjs.org/docs/hooks-overview.html): A hook allows a functional component to manipulate data and use lifecycle methods like a class component can.
* [Component constructor](https://reactjs.org/docs/react-component.html): A constructor for a component allows the component to initialize its states and bind any methods. It is only run once when the component is initialized.
* [bind() method](https://codeburst.io/binding-functions-in-react-b168d2d006cb): When you bind a method, it tells that method which object to interact with.
* [HTTP Request](https://www.w3schools.com/tags/ref_httpmethods.asp#:~:text=HTTP%20works%20as%20a%20request,also%20contain%20the%20requested%20content.): A client/application can ask to apply actions on some data from the server using a HTTP request. Some types of HTTP requests include: GET, POST, PUT, etc.
* [Set](https://www.geeksforgeeks.org/sets-in-javascript/): A data structure where the data is ordered and is unique (no duplicates).
* [Ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator): Basically a one-line if statement. General syntax is: ```<condition> ? <expression if condition is true> : <expression if condition is false>```
