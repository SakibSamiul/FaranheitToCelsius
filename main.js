function getFaranheitToCelcius(Faranheit){
    var Celcius = (Faranheit-32) * (5 / 9);
    return Celcius;
}

var Faranheit = 68;
var Celcius = getFaranheitToCelcius(Faranheit);
console.log(Celcius);