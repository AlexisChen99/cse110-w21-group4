### Architecture

The key functions needed to run the timer are found in the app.js file. The code layout is described below. Refer to these system diagrams and other documentation for an explanation of how this architecture interacts with the end users.

See C4 diagrams listed [for end users](https://github.com/AlexisChen99/cse110-w21-group4/blob/main/specs/brainstorm/C4context.drawio.png) and [the internal system architecture](https://github.com/AlexisChen99/cse110-w21-group4/blob/main/specs/brainstorm/C4system.drawio.png)

### How to setup/build/etc.

We used GitHub and its auxiliary functions such as Actions, Projects, and Pages to set up our project. We did not use any third-party applications to enhance our application, so there are no API keys needed to use the timer. The only requirement needed to use the timer is to enable JavaScript because our timer runs through JavaScript files.

To build the project, Node.JS is needed to install Jest, Cypress, and JSDocs. These three components are detailed in the testing and CI/CD pipeline portions of the documentation. The `workflows` folder consists of the `node.js.yml` that is used by GitHub Actions to build and run the CI/CD pipeline.

We use GitHub Pages to deploy our code. The Potato Timer application is deployed through the url [https://alexischen99.github.io/cse110-w21-group4/source/potato.html](https://alexischen99.github.io/cse110-w21-group4/source/potato.html). 

If you want to run it locally just open potato.html in a vscode live server

### Explanation of code layout

drag.js contains the code required to drag our settings and task list menus, as attributed to [W3Schools](https://www.w3schools.com/howto/howto_js_draggable.asp). This is to keep the code we had to research on into a separate file. Because this is an additional function that we had to use, the file has separate code coverage.

lang.js contains a single global variable called `dict`. This variable has key-value entries for English, Chinese, Spanish, and Korean where the values are the respective strings in each language. `dict` is used in app.js and is used for DOM manipulation of the potato.html file to update innerText and innerHTML.

app.js contains the bulk of the code required for the Potato Timer. The top of the file contains the global variables that are used throughout the file because we read and write to variables multiple times in different functions. We structured the file so that the main timer’s functions are performed in the next portion of the code, such as the audio, potato animation, and the start and stop buttons. Then the next chunk of code consists of the functions used to control the task system we implemented into the timer. At the very end of the JavaScript file, there are loading functions used to load a user’s preferences that were locally stored after they changed things in their settings. At the end of the file, the `module.exports` is used to export variables for use in Jest.

``` 
1. load event listeners on page load
2. Settings Functions
    - mute functions
    - functions to control phase lengths
    - function to toggle animations
3. functions related to starting the timer and changing the phase of the timer
4. functions related to the congrats screen
5. functions to edit the dom
6. functions to load from localStorage
```

### Testing
Initially, we did early testing coverage through Jest, but we ran into conflicts with global variables such as the `dict`, which holds the strings for the languages we support, in the `lang.js` file. This caused us to only cover 5.84% of the statements in `app.js`.To get around this issue, we mainly used Cypress to cover 93.68% of the statements in `app.js`.  

Many of our Cypress tests have a `beforeEach()` function that visits the url of the website and then clicks the `#next` button four times. This is to close the instructions menu that pops up the first time because starting every new test resets the instance of Cypress without anything locally stored. Thus, this `beforeEach()` will allow us to set up the instance of the website to run our semantically-named tests. 

See our [Coverage Report](https://github.com/AlexisChen99/cse110-w21-group4/blob/main/specs/QA/Overview.md) for further images and links to our testing.

### CI/CD Pipline

See the [CI/CD Pipeline](https://github.com/AlexisChen99/cse110-w21-group4/wiki/CI-CD-Pipeline) for an early version and status.

As of the CI/CD pipeline on March 20, 2021, we have updated the pipeline’s actions. We continue to use the automatic workflow trigger but now it also successfully triggers in response to any changes to our main branch. Thus, it works as expected. 

However, the linting portion of the pipeline does not work because of global variables and having variables be considered not used. However, this occurs from using `”extends”: “eslint:recommended”` in the `.eslintrc` file. We will not be using linting for our CI/CD pipeline. 

We are able to run our automated tests through Jest, but the Cypress testing may or may not be automated into the pipeline. 

We generate documentation of the app.js file through JSDocs by calling `gendocs`. This documentation is generated based on the tags attributed to each function, so it can create a full documentation of the methods in our code.

To update changes to our project, we have a pull-request checklist that the team uses when they wish to update the main branch. The pipeline is run on the branch that is requesting to push onto main to see if it passes, and then our team managers would manually review the changes to see if they should be approved.
