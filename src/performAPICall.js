async function performAPICall(locn) {
    let p = await fetch('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q='+locn+'&units=metric&appid=2d62a90b58e587895e43e52c309887b6',{mode: "cors"})
    return await p.json()
}

export default performAPICall;