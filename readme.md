# Flow typed boilerplate

* for NodeJS projects
* without Babel (using `flow-remove-types`)

## How to use

Clone this project:

`git clone git@github.com:asci/flow-node-boilerplate.git projectname && cd projectname`

Then reinitialize git and package with your data:

`rm -rf .git && git init . && npm init && npm install`

After you install your own dependencies (like express or any other module) you can run command to install flow types declarations:

`npm run flow:deps`

If Flow is not integrated in your IDE you can run test check form command line with:

`npm run flow:check`

It is also available and important to check flow coverage. By default required coverage set to 100%. You can check current coverage with a command:

`npm run flow:coverage`

At first run it could take a bit **more time** than expected.

## How to start

* `npm start` - will get all files from `src` folder then remove types and copy all files to lib folder and then run it with `node`

* `npm run dev` - will create watcher for `src` folder and remove types and copy all files to lib folder and then run it with `nodemon`. On each change in files in `src` folder it will restart
