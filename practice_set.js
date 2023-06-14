// 1.Write a program to load a javascript file in a browser using promises. user.then() to display on alert when the load is complete.


// const loadScript = async(src)=>{
//     return new Promise((resolve, reject)=>{
//         let script = document.createElement('script');
//         script.src = src;
//         script.onload = ()=>{
//             resolve(src)
//         }
//         document.body.append(script);
//     })
   
// }

// let a = loadScript(`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js`);
// a.then((value)=>{
//     alert("Script loaded Successfully " + value)
// }).catch((err)=>{
//     console.log("You have an Error: "+err)
// })

// 2. same with async await
// const loadScript = async(src)=>{
//     return new Promise((resolve, reject)=>{
//         let script = document.createElement('script');
//         script.src = src;
//         script.onload = ()=>{
//             resolve(src)
//         }
//         document.body.append(script);
//     })
// }
// const load = async() =>{
//     let a = await loadScript(`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js`);
//     console.log(a)
// }
// load()

// 3. Create a promise which rejects after 3 seconds use an async/await to get its value use try catch to handle its error
// let newFunction = async() =>{
//         return new Promise((resolve,reject)=>{
//             setInterval(() => {
//                 reject(new Error("404"))
//             }, 3000);  
//         })
// }
// let test = async()=>{
//     try{
//         let a = await newFunction()
//         console.log(a)
//     }catch(err){
//         console.log(err)
//     }
// }
// test()

// 4. write a program using promise.all() inside an async/await to await 2 promises compare its results with the case where we await three promises one by one
// const p1 = async()=>{
//      return new Promise((resolve, reject)=>{
//         resolve("Value 1")
//     })
// }
// const p2 = async()=>{
//     return new Promise((resolve, reject)=>{
//        resolve("Value 2")
//    })
// }
// const p3 = async()=>{
//     return new Promise((resolve, reject)=>{
//        resolve("Value 3")
//    })
// }

// const runFunction = async()=>{
//     console.time()
//     //Took 0.170166015625 ms to run
//     // let a1 = await p1()
//     // let a2 = await p2()
//     // let a3 = await p3()
//     // console.log(a1,a2,a3)

//     //Took 0.3359375 ms to run
//     // let a1 = p1()
//     // let a2 = p2()
//     // let a3 = p3()
//     // let promise_all = await Promise.all([a1,a2,a3])
//     // console.log(promise_all)
//     console.timeEnd()
// }
// runFunction()