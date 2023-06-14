//==============================================================
//Promises
// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("Value 1")
//     }, 4000);
// })
// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         // reject(new Error("Error"))
//         resolve("Value 2")
//     }, 2000);
// })
// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("Value 3")
//     }, 3000);
// })
// p1.then((value)=>{
//     console.log(value)
// })
// p2.then((value)=>{
//     console.log(value)
// })
// p3.then((value)=>{
//     console.log(value)
// })

//++++++++++++++++++++++++++++++++++++++++++
//Promise.all
// let promise_all = Promise.all([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })
//Promise.allSettled
// let promise_all = Promise.allSettled([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })
//Promise.race
// let promise_all = Promise.race([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })
//Promise.any
// let promise_all = Promise.any([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })
//Promise.resolve
// let promise_all = Promise.resolve(6)
// promise_all.then((value)=>{
//     console.log(value)
// })
//Promise.reject
// let promise_all = Promise.reject(new Error("Hey"))
// promise_all.then((value)=>{
//     console.log(value)
// })
//++++++++++++++++++++++++++++++++++++++++++
//==============================================================

//==============================================================
//Async/Await
/*We can create any function into Async and Await Promises in that function*/
// async function himanshu(){
//     let delhiWeather = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("27 Deg")
//         }, 3000);
//     })
//     let bangaloreWeather = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("21 Deg")
//         }, 5000);
//     })
//     // delhiWeather.then((value)=>{
//     //     alert(value)
//     // })
//     // bangaloreWeather.then(alert)
//     console.log("Fetching Delhi Weather...")
//     let delhiW = await delhiWeather
//     console.log("Fetched Delhi weather: " + delhiW)
//     console.log("Fetching Bangalore Weather...")
//     let bangaloreW = await bangaloreWeather
//     console.log("Fetched Banglaore weather: " + bangaloreW)
//     return [delhiW,bangaloreW]
// }
// let a = himanshu()/*.then((value)=>{
//     alert(value)
// })*/
// a.then((value)=>{
//     console.log(value)
// })

//==============================================================

//==============================================================
//Error Handling

//==============================================================



const loadScriptFetchAPI = async(src) =>{
    return new Promise((resolve,reject)=>{
        let script = document.createElement('script')
        script.src = src
        script.onload = async()=>{
            resolve("Your FetchAPI script loaded successfully...." + 200)
        }
        document.body.append(script)
    })
}
let runScript =async() =>{
    try{
        let ls = await loadScriptFetchAPI("fetchAPI.js")
        console.log(ls)
    }catch(err){
        console.log(err)
    }
}
// let runScript = loadScriptHackerMan("hackerman.js")
// runScript.then((value)=>{
//     console.log(value)
// }).catch((err)=>{
//     console.log("You have an Error: "+ err) 
// })
runScript()
