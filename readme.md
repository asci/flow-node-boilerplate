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
