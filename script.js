$.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=26&lon=48&appid=d31d5b3b91390a2d9a173071aae8b0d0", function(data){
 console.log(data);

 var icone = "http://openweathermap.org/img/w/" + data.clima[0].icone + ".png";
 var temp = data.main.temp;
 var clima = data.clima[0].main;


 $(".icon").attr("src", icone);
 $('.clima').append(clima);
 $('.temp').append(temp);
});

