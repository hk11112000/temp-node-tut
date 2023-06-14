const path = require('path')

//Path seperator
const pathSep = path.sep;
console.log(`This is path Sep method "${pathSep}"`)

//Join method
const filePath = path.join('/container','subContainer','text.txt')
console.log(filePath)

//Base name
const base = path.basename(filePath);
console.log(base)

//Resolve method shows absolute Path
const resolvePath = path.resolve(__dirname,'container','subContainer','text.txt')
console.log(resolvePath)
