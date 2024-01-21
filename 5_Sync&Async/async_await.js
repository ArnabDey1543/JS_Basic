
// async function myfunc() {
//     return "Hello";
// }

// myfunc().then((x)=>{
//     alert(x);
// })





async function myfunc() {
    
    let delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("35 deg");
        }, 2000);
    })

    let puneWeather = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("16 deg");
        }, 8000);
    })

    delhiWeather.then(alert);
    puneWeather.then(alert);


    console.log("Fetching delhi weather");
    let delhi = await(delhiWeather);
    console.log(`delhi weather fetched  - ${delhi}`);
    console.log("Fetching pune weather");
    let pune = await(puneWeather);
    console.log(`pune weather fetched - ${pune}`);
    return [delhi,pune];
}

let a = myfunc();
a.then((value)=>{
    console.log(value);
})
// console.log(a);;