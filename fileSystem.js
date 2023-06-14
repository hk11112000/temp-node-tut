const  {readFileSync, writeFileSync} =  require('fs')
// const fs = require('fs')

const first  = readFileSync('./container/first.txt','utf8')
const second  = readFileSync('./container/second.txt','utf8')


writeFileSync('./container/result-sync.txt', 
`Here is the result: ${first} , ${second}`,{ flag: 'a' })
// console.log(first, second)