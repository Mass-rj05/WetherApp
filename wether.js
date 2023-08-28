

const degrees = document.querySelector(".degrees");
const city = document.querySelector(".city");
const hour = document.querySelectorAll(".hour");
const searchInput = document.querySelector('#search');
const button = document.querySelector('#send');
const deg0 = document.querySelector(".deg0")
const deg6 = document.querySelector(".deg6")
const deg12 = document.querySelector(".deg12")
const deg18 = document.querySelector(".deg18")
const iconbox = document.querySelector(".icon")
const temp =  document.getElementsByClassName("temp")[0].children[1]
let citychange;


citychange = "poznan"
const apiKey = "24a114ac009b4699bb0170304232708";
function weatherapi(){
  fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=` + citychange +`&days=1&aqi=no&alerts=no`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data)
   
  
  
    const temperature  = data.current.temp_c
  const name = data.location.name
  const icon = data.current.condition.icon;
  const temphour0 = data.forecast.forecastday[0].hour[0].temp_c;
  const temphour6 = data.forecast.forecastday[0].hour[5].temp_c;
  const temphour12 = data.forecast.forecastday[0].hour[11].temp_c;
  const temphour18 = data.forecast.forecastday[0].hour[17].temp_c;
  
  
  
  degrees.innerText = temperature + "°c";
  city.innerText = name;
  deg0.innerText = temphour0 + "°c";
  deg6.innerText = temphour6 + "°c";
  deg12.innerText = temphour12 + "°c";
  deg18.innerText = temphour18 + "°c";
  iconbox.style.backgroundImage =  "url(https:"+ icon +")";
  
  
  })
}
weatherapi()


button.addEventListener('click', function(){
    
citychange = searchInput.value 
searchInput.value = '';
weatherapi()



})

searchInput.addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    event.preventDefault();
    button.click();
  }



})


