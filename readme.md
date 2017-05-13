# Flow typed boilerplate
- for NodeJS projects
- without Babel (using `flow-remove-types`)

## How to use
Clone this project:

`git clone git@github.com:asci/flow-node-boilerplate.git projectname && cd projectname
`

Then reinitialize git and package with your data:

`rm -rf .git && git init . && npm init && npm install`

After you install your own dependencies (like express or any other module) you can run command to install flow types declarations:

`npm run flow:deps`

## How to start

- `npm run start` - will get all files from `src` folder then remove types and copy all files to lib folder and then run it with `node`

- `npm run dev` - will create watcher for `src` folder and remove types and copy all files to lib folder and then run it with `nodemon`. On each change in files in `src` folder it will restart

