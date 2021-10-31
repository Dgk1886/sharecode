//local dependency - use it only in this particular project
// npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>

//package.json - Manifest File (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
//Not manual approach npm init (pc will ask questions to you for define the settings)
//If you pass a question, just press enter
//npm init -y (everything is default)

//Package.json bize projemizdeki package'larımız hakkında
//önemli bilgiler veriyor

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)