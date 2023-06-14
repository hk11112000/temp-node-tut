// require('./mind-grenade')
const os = require('os'); //Build in modules doesn't need any installation

//Info about current user
const user = os.userInfo()
console.log(user)
//Method returns the system uptime in seconds
const upTime = os.uptime()
console.log(`The System Uptime is ${upTime} seconds`)

console.log(`This is object of os module methods`)
const currentOS ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)