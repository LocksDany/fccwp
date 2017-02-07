$(document).ready(function(){

var weather;
var api_key = '36fae26c3312900f2124885d6863b04d';
var units = '';
    
    function gps(){
    navigator.geolocation.getCurrentPosition(function(position) {
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=" + units + "&appid=" + api_key, function(json){
      weather = json;
      console.log(position.coords.latitude + " & " + position.coords.longitude);
      console.log(weather);
      $('#status').html(json.name + ", " + json.sys.country + ". " + json.weather[0].main);
      
      var temp = json.main.temp;
      var degree = '';
      var speed = '';
      
      if(units == 'imperial'){degree = 'F'; speed='mph';} else {degree = 'C'; speed='km/h';}
      
      temp = Math.round(temp);
      
      $('#temperature').html(temp);
      $('#degree').html(degree);
      $('#humidity').html(json.main.humidity + "%");
      $('#pressure').html(json.main.pressure + " hPa");
      $('#wind').html("<i class='wi wi-wind towards-" + json.wind.deg + "-deg'></i>" + " " + json.wind.deg + "° at " + json.wind.speed + " " + speed);
      $('#tempMin').html(json.main.temp_min);
      $('#tempMax').html(json.main.temp_max);
  });
});}
    
    function showWeather(){
        $('#degreeSelection').addClass('invisible');
        $('#weather').removeClass('invisible');
    }
    
    $('#imperial').click(function(){units = 'imperial';gps();showWeather();});
    $('#metric').click(function(){units = 'metric';gps();showWeather();});
    
});

