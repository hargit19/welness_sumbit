const apikey = "ed8d90977d61926de72d854addbb0f1b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function displayWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
    }
    else{
        document.querySelector(".error").style.display = "none"
        var data = await response.json();
    console.log(data);

    document.querySelector(".city_name").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
    document.querySelector("#wind_speed").innerHTML = data.wind.speed + " Km/hr";
    document.querySelector("#pressure").innerHTML = data.main.pressure + " Pa";
    document.querySelector("#weather_type").innerHTML = data.weather[0].main;

    fahrenheit = document.querySelector(".view_fahren");
    
    fahrenheit.addEventListener("click", ()=>{
        cel = data.main.temp;
        document.querySelector(".temperature").innerHTML = Math.round(((9/5)*cel) + 32) + "°F";
    })
    celsius = document.querySelector(".view_celsius");
    celsius.addEventListener("click", ()=>{
        cel =  data.main.temp;
        document.querySelector(".temperature").innerHTML = Math.round(cel) + "°C";
    })
    
    const weather_icon = document.querySelector(".weather_icon");
    if(data.weather[0].main == "Clouds"){
        weather_icon.src = "https://w1.pngwing.com/pngs/485/409/png-transparent-rain-cloud-weather-forecasting-rain-and-snow-mixed-drawing-lightning-heart-sky.png";
    }
    else if(data.weather[0].main == "Rain"){
        weather_icon.src = "https://i.pinimg.com/736x/c6/8c/33/c68c334958ad3cfec572641179e008d1.jpg";
    }
    else if(data.weather[0].main == "Clear"){
        weather_icon.src = "https://img.freepik.com/premium-vector/3d-cartoon-icon-weather-forecast-mostly-sunny-vector-illustration_595345-44.jpg?w=2000";
    }
    else if(data.weather[0].main == "Drizzle"){
        weather_icon.src = "https://atlas-content-cdn.pixelsquid.com/assets_v2/224/2240599423119791187/jpeg-600/G03.jpg?modifiedAt=1";
    }
    else if(data.weather[0].main == "Mist"){
        weather_icon.src = "https://i.pinimg.com/736x/3f/7d/fc/3f7dfc23856ed5e7dadbf6c8bec075c2.jpg";
    }
    }

    
   
}

const searchbox = document.querySelector(".input_city");
const searchbtn = document.querySelector(".input button");
function submit_input(){
    let input_value =  document.querySelector(".input_city").value;
    city = input_value;
    displayWeather(city)
}




