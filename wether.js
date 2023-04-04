//Fetch the data from the Wether API
  //Stworzyłem konto na stronce żeby mieć darmowy dostęp do tego api
  //Każde API posiada endpointy, które zwracają 'jakąś' odpowiedź
  //W naszym przypadku korzystamy z API które ma Base URL: http://api.weatherapi.com/v1
  //Api dostarcza wiele endpointów np.  /current.json i /forecast.json 
  //URL: http://api.weatherapi.com/v1/current.json
  //endpont może przyjmować parametry, czasem opcjonalne a czasem wymagane
  //W naszym przypadku parametry przekazywane w URL
  //np. wymagane są: key, q, opcjonalne: days,hour itd.
  //Czyli jak chesz coś pobrać to musisz powiedzieć jaki masz klucz API (autentykacja) i co chcesz dostać 
  //Skąd wiem co przekazać i jakie są endpointy? Każde API powinno mieć dokumentację https://www.weatherapi.com/docs/
//Zadanie:
  //Stwórz funkcję która po kliknięciu buttona wyśle request do Wether API
    //Do wysłania requesta użyj Fetch API (chyba że znasz już inne metody np. axios to zapraszam :D) - Doksy: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //request musi zawierać apiKEY, nasz key=1b2d3f5c36244b56bde173851232903
    //Request uwzględni wpisaną lokalizację (jak chcesz testować Polskie lokalizacje to pisz bez pl znaków np. Poznan )
  //Po otrzymaniu 'zwrotki' z API wyciagnij dane z obkietu i przekaże je do pół HTMl które stworzyłeś (Miasto, teperatura, temperatury godzinowe)

//Good luck ;)


const degrees = document.querySelector(".degrees");
const city = document.querySelector(".city");
const hour = document.querySelectorAll(".hour");
const searchInput = document.querySelector('.search');
const button = document.querySelector('#send');
const deg0 = document.querySelector(".deg0")
const deg6 = document.querySelector(".deg6")
const deg12 = document.querySelector(".deg12")
const deg18 = document.querySelector(".deg18")
const temp = document.querySelectorAll(".temp")
const iconbox = document.querySelector(".icon")




const apiKey = "1b2d3f5c36244b56bde173851232903";

let weather = {
  fetchWeather: function(city) {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=` + city +`&days=1&aqi=no&alerts=no`
    ).then((response) => response.json())
    .then((data) => this.displayWeather(data))
  },
  displayWeather: function(data){

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



  },

  search: function (){
    this.fetchWeather(searchInput.value)

  
    },
  
  }
  
  button.addEventListener('click', function(event){
weather.search();
searchInput.value = '';



})

searchInput.addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    event.preventDefault();
    button.click();
  }



})

