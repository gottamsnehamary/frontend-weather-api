//Complete the Weather API Backend part using openweathermap api
var btn = document.querySelector('#btn')
var txt1 = document.querySelector('#txt1')
var showPlace= document.querySelector('#showPlace')
var showDayAndTime = document.querySelector('#showDayAndTime')
var showWeather = document.querySelector('#showWeather')
var  showIcon= document.querySelector('#icon')
var  showTemperature= document.querySelector('#showTemperature')


btn.addEventListener('click', function(showPlace){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+txt1.value+'&appid=a96c80a70171f185dbf2869e0bdf47e4')
    .then(response => response.json())
    .then(data => {
      
      var showPlaceValue = data['name'];
      var showDayAndTimeValue = data['timezone'];
      var showWeatherValue = data['weather'][2]['description'];
      var showIconValue= data['weather'][3]['icon'];
      var showTemperatureValue = data['main']['temp'];

     
      showPlace.innerHTML = showPlaceValue  ;
      showDayAndTime.innerHTML = "DayAndTime - "+showDayAndTimeValue;
      showWeather.innerHTML = "Weather - "+showWeatherValue;
      showIcon.innerHTML= "Icon -"+showIconValue;
      showTemperature.innerHTML= "Temperature -" +showTemperatureValue;
      txt1.value ="";
    
    })
    
    .catch(err => alert("Wrong city name!"));
    })