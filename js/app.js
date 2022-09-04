
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
        
        const inputFild = document.getElementById('search-fild')
        const inputFildValue = inputFild.value;

        if(data.cod == "404"){
            const resultContainer = document.querySelector('.result-container')
            const errorResult = document.createElement('div');

            resultContainer.textContent = '';    

            errorResult.innerHTML = `
            <h2 class="text-dark text-center p-4 bg-light rounded-4">
                Your Search <span class="text-danger">"${inputFildValue}"</span> is Not a
                City Name!
            </h2>
            `
            resultContainer.appendChild(errorResult)

            loadingSpiner.classList.add('d-none')

        loadingSpiner.classList.add('d-none')
        inputFild.value = ""

        }

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

        inputFild.value = "";
    }

        // get and set function 
        const displaysetById = (id, set)=>{
        document.getElementById(id).innerText = set;
        loadingSpiner.classList.add('d-none')
        }
}

// enterkey press function 
document.getElementById('search-fild').addEventListener('keypress', (event) =>{

    const inputFild = document.getElementById('search-fild')
    const inputFildValue = inputFild.value;

    if(event.key == "Enter"){
        getWeather(inputFildValue);
    
        // inputFild.value = "";
    }
})


// button click function 
document.getElementById('search-btn').addEventListener('click', ()=>{
    getWeather(inputFildValue);
})

getWeather('dhaka')




