
// get loading spiner 
const loadingSpiner = document.querySelector('.loading-spinar')


// get weather API function 
const getWeather = (city)=>{
loadingSpiner.classList.remove('d-none')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2aa7f6214d3f8fba27ed27160127d965&units=metric`

    fetch(url)
    .then(res => res.json())
    .then(data => weatherGet(data))

    const weatherGet = (data) =>{
        console.log(data)

        displaysetById('city', data.name)
        displaysetById('country', data.sys.country)

        const temperature = `${data.main.temp} \u00B0C`
        displaysetById('weather', temperature)

        const sunriceHours = new Date(data.sys.sunrise).getHours();
        const sunriceMinutes = new Date(data.sys.sunrise).getMinutes()
        const sunrice = `${sunriceHours}:${sunriceMinutes} AM`;

        const sunSetHours = new Date(data.sys.sunset).getHours()
        const sunsetMinutes = new Date(data.sys.sunset).getMinutes()
        const sunset = `${sunSetHours}:${sunsetMinutes} PM`;

        displaysetById('sunrice', sunrice)
        displaysetById('sunset', sunset)
        }


        // get and set function 
        const displaysetById = (id, set)=>{
        document.getElementById(id).innerText = set;
        loadingSpiner.classList.add('d-none')

        }
}


// getWeather('dhaka')

document.getElementById('search-btn').addEventListener('click', ()=>{
    console.log('button click')
})