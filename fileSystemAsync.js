const  {readFile, writeFile} =  require('fs')
// const fs = require('fs')

readFile('./container/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./container/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./container/result-async.txt',`Here is the result: ${first} , ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})