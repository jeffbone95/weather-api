const api="&key=90681e88f1484d709cb98734325b3ba5" 
const url="http://api.weatherbit.io/v2.0/current?units=I" 
const cityNameEl=document.getElementById("cityName")



const currentTemperature=document.getElementById("currentTemperature") 
const citySearchName=document.getElementById("citySearchName") 
const searchButton=document.getElementById("searchButton")

function getWeather(){ 
    const city=citySearchName.value  
    const cityParam="&city="+city+"&country=US" 
    const cityurl=url+cityParam+api  
    fetch(cityurl).then(response=>{ 
        console.log(response) 
        return response.json()
    }) 
    .then(data=>{ 
        console.log(data) 
        cityNameEl.textContent=data.data[0].city_name 
        currentTemperature.textContent=data.data[0].temp 
        
    }) 
    
}
searchButton.addEventListener("click", getWeather)