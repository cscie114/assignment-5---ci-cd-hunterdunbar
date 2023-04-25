# assignment-5-cicd
Here's my assignment 5 project. 

For this assignment I wanted to rebuild part of my assignment 4 project in Eleventy. This project has a home page which links out to a list of albums. The user can then click into the album to view artwork and info on the album. It's very basic stuff but it seemed like this assignment was more about the CI/CD and serverless than any major functionality. 

The application autodeploys to Netlify when you push to git. This is accomplished through the configuration in my ci.yaml file which is in the .github/workflows directory. The yaml file utilizes env variables defined in my github repo. 

The yaml file also runs lint and test scripts. 

For my tests, I am using ava which seems like a preferred option for Eleventy testing. TBH I did not dig too far into how I could use the package to test my application but I was able to get the library to import and run some basic tests which pass everytime. The ava test file is in test.js in the root directory. 

For the serverless function, I am using Eleventy Serverless. This gets setup in a few places but we first add the eleventyserverless plugin in the .eleventy.js file. I believe when the project starts up it automatically generates the netlify.toml file which contains some configuration info for the serverless function. The main place where the serverless function is defined is in the netlify/functions/myfunction/index.js file. It basically accepts a url in the argument and returns that page. This function is kind of useless but I was not able to figure out how to inject dynamic data from external sources and then have that usable by the page. It works though. 

The public netlify url is: https://guitar-album-site.netlify.app/