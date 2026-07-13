

const apikey = "43182f2a8073621dac709db45d5cdd8b";
const apiurl = 
"https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchbox= document.querySelector(`.search input`);
const searchbtt= document.querySelector(`.search button`);

async function cheackweather(city) {
    const respons = await fetch(apiurl  + city + `&appid=${apikey}`  );
    var data =await respons.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "&#8451";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    
}
  
    searchbtt.addEventListener("click", ()=>{
      cheackweather(searchbox.value);
    })

