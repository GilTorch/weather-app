
function loadWeather(units){
  
var getIP = 'http://ip-api.com/json/';
var openWeatherMap ='http://api.openweathermap.org/data/2.5/weather';
  
  

  $.getJSON(getIP).done(function(location) {
    $.getJSON(openWeatherMap, {
        lat: location.lat,
        lon: location.lon,
        units:units,
        APPID: 'c3e870536a22b7e9154428c356aa91ad'
    }).done(function(weather) {
       $("#city").html(weather.name+", "+weather.sys.country);
       $("#temperature").html(weather.main.temp);
       $("#weather").html(weather.weather[0].main);
      $("#weather-icon img").attr("src",'http://openweathermap.org/img/w/'+weather.weather[0].icon+".png");
        $("#main_container").addClass("animated bounceIn");
    $("#myAnimation").hide();
      
    });
})
}

$(document).ready(function(){
 
  $('h1').addClass("animated fadeIn");
  loadWeather("metric");
 // alert("it's working");
  var bol=false;
  $("#fahrenheit-celsius").click(function(){
    bol=!bol;
    if(bol)
     {       
    loadWeather("imperial");
                $(this).text("F");
        $('#fahrenheit-celsius').addClass("animated bounceIn");
                $('#fahrenheit-celsius').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                  $('#fahrenheit-celsius').removeClass("animated bounceIn");
                });
     }
    else
      {
         
       
        loadWeather("metric");
        
             $(this).text("C");
                    
                $('#fahrenheit-celsius').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                  $('#fahrenheit-celsius').removeClass("animated bounceIn");
                });
     
      }
  });
})