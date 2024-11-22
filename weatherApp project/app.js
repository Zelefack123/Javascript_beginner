const inputBox = document.getElementById("city");
const temp = document.getElementById("humidity");
const wind = document.getElementById("wind");
const city = document.getElementById("temptown");


const towns=  [
    {
    town:"berlin",
    Attributes:
        {
     wind: 7,
     temperture: 8,
     humidity: 10,

        }
    },
    {

    town:"Johannesburg",
    Attributes:
        {
     wind: 1,
     temperture: 8,
     humidity:7

        }
    }
    ,
{
    town:"Johannesburg",
    Attributes:
        {
     wind: 3,
     temperture: 9,
     humidity:5

        }
    }
    ,
{
    town:"Yaounde",
    Attributes:
        {
     wind: 9,
     temperture: 8,
     humidity:10

        }
}




    ]


function displayCity(){
     let inputCity =  inputBox.value;        
    
     const foundTown = towns.find(town => town.town === inputCity);
     if(foundTown){
    foundTown = city.innerHTML;
    attributes.wind = wind.innerHTML;
    attributes.humidity = inputBox.innerHTML;
    attributes.temperature = inputBox.innerHTML;
  }

    else{
        alert("the town you've selected doesn't exist")
    }
  }













