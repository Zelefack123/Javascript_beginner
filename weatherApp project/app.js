const Input = document.querySelector("input");
const Temperature = document.querySelector("#temp");
const Humidity = document.querySelector("#humidity-value");
const windspeed = document.querySelector("#windspeed-value");
const town = document.querySelector("#temptown");
const Image = document.querySelector("img");

const cities = [
 {
 town: "Berlin",
 humidity: 73,
 Temperature: 25,
 windspeed:10

  },
  {
    town: "Douala",
    humidity: 73,
    Temperature: -4
   
     },
     {
        town: "Yaounde",
        humidity: 25,
        Temperature: 10,
        windspeed: 10
       
     },
     {
        town: "Buea",
        humidity: 10,
        Temperature: 70,
        windspeed:30,
       
     },
     {
        town: "Douala",
        humidity: 20,
        Temperature: 15,
        windspeed:10,
     },


]



let found;

function displayCity(){
   
    if (Input.value.trim === ""){
        alert("Enter a town")
    }
    else {
    const towns = Input.value;
    for (i = 0; i < cities.length; i++){
        if(cities[i].town.toLowerCase() === towns.toLowerCase()){
       Temperature.innerHTML = `${cities[i].Temperature}<sup>o</sup>c`
       Humidity.innerHTML = `${cities[i].humidity}%`
       windspeed.innerHTML =`${ cities[i].windspeed}Km/hr`;
       town.innerHTML = cities[i].town;
       // Update the weather image
       if (cities[i].Temperature <= 0) {
        Image.setAttribute(
          "src",
          "./images/snowfall_4731783-removebg-preview.png"
        );
      } else if (cities[i].Temperature > 0 && cities[i].Temperature <= 15) {
        Image.setAttribute("src", "./images/rain_11844406-removebg-preview.png");
      } else if (cities[i].Temperature > 15 && cities[i].Temperature <= 30) {
        Image.setAttribute("src", "./images/cloudy..png");
      } else {
        Image.setAttribute("src", "./images/sun.png");
      }

    found = true;
        } }
 if(!found){
    alert("the town does not exist")
 }
    
    


}
}