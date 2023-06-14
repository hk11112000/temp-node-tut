// const p = fetch('https://goweather.herokuapp.com/weather/london')
// p.then((response)=>{
//     return response.text()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

    // let city = window.prompt('Please enter the city')
    // const p1 = fetch('https://goweather.herokuapp.com/weather/'+ city)
    // p1.then((response)=>{
    //     console.log(response.status)
    //     return response.json()
    // }).then((data)=>{
    //     console.log(data)
    // }).catch((err)=>{
    //     console.log(err)
    // })

    // let res = fetch(url,{
    //     header:{
    //         authentication:'saved',
    //         identity:{
    //             n : 'Himanshu',
    //             a : 18,
    //             g : "Male"
    //         }
    //     }
    // })

const fetchWeather = async() =>{
    console.clear()
    try{
        let city = window.prompt('Please enter the city')
        const response = await fetch('https://goweather.herokuapp.com/weather/'+ city)
        if(!response.ok){
            throw new Error(response.status)
        }
        const jsonData = await response.json();
        console.log(jsonData);
    }catch(err){
        if (err.message.includes('failed to fetch')) {
            console.log('Network error occurred. Please check your internet connection.');
        } else if (err.message === '404') {
            console.log('City not found. Please enter a valid city name.');
        } else {
            console.log('You have an ', err);
        }
    }
}
const calculator = async(n)=>{
    try{
        let length = parseInt(n);
        if(length < 100){
            console.log('Number is small')
        }
        else if(length > 100){
            console.log('Number is big')
        }
        else{
            console.log('Number is same')
        }
    }catch(err){
        console.log("Your have an " + err)
    }
}
    
module.exports = calculator