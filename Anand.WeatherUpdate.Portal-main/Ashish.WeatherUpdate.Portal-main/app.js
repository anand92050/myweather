//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi={
    key:"5e3a13f3d16fe5a862b2e81575433af8",
    baseUrl : "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputbox = document.getElementById('input-box');
const button = document.getElementById("submit");
// event listner function on keypass
button.addEventListener("click", (event) => {
    //if(event.keyCode==13)
   // {
       console.log(searchInputbox.value);
       getWeatherReport(searchInputbox.value);
       document.querySelector('.weather-body').style.display="block";

    //}
});



// get weather report

function getWeatherReport(city)
{
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather  =>{
        return weather.json();
    }).then(showWeatherReport);
}

//show weather  report
function showWeatherReport(weather){
    console.log(weather);

    let city=document.getElementById('city');
    city.innerText=`${weather.name}, ${weather.sys.country}`;

    let temperature=document.getElementById('temp');
    temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;
    let min =document.getElementById('min-max');

    let weatherType=document.getElementById('weather');
    weatherType.innerText=`${weather.weather[0].main}`;

    let speed=document.getElementById('speed');
    speed.innerText=`Speed: ${weather.wind.speed}km/h`;


    min.innerHTML=`Min: ${Math.floor(weather.main.temp_min)}&deg;C, Max: ${Math.ceil(weather.main.temp_max)}&deg;C`;
    
    let sunriseset=document.getElementById('sunrise-sunset');
    sunriseset.innerText=`Sunrise-${window.moment(weather.sys.sunrise * 1000).format('HH:mm a')}, Sunset-${window.moment(weather.sys.sunset * 1000).format('HH:mm a')}`;

    let date=document.getElementById('date');
    let todaydate= new Date();
    date.innerText=dateManage(todaydate);


    if(weatherType.textContent == 'Clear'){
        document.body.style.backgroundImage ="url(images/gettyimages.jpg)";
    }
    if(weatherType.textContent == 'Haze'){
        document.body.style.backgroundImage ="url(images/haze.jpg)";
    }
    if(weatherType.textContent == 'Rain'){
        document.body.style.backgroundImage ="url(images/rain.jpg)";
    }
    if(weatherType.textContent == 'Clouds'){
        document.body.style.backgroundImage ="url(images/cloudshd.jpg)";
    }
    if(weatherType.textContent == 'Snow'){
        document.body.style.backgroundImage ="url(images/snow.jpg)";
    }
    if(weatherType.textContent == 'Thunderstorm'){
        document.body.style.backgroundImage ="url(images/thunderstorm.jpg)";
    }
    if(weatherType.textContent == 'Sunny'){
        document.body.style.backgroundImage ="url(images/sunny.jpg)";
    }
    if(weatherType.textContent == 'Mist'){
        document.body.style.backgroundImage ="url(images/mist.jpg)";
    }


}




//date manage

function dateManage(dateArg){
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    let year=dateArg.getFullYear();
    let date=dateArg.getDate();
    let month=months[dateArg.getMonth()];
    let day=days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;


}


// to make responsive and hosting it take help of this -> https://www.youtube.com/watch?v=6trGQWzg2AI