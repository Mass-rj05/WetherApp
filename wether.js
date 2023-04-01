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
console.info("JS initialized");
const apiKey = "1b2d3f5c36244b56bde173851232903";
fetch(
  `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Poznan&days=1&aqi=no&alerts=no`
)
  .then((response) => response.json())
  .then((data) => console.log(data));
