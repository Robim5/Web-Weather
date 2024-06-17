const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const cityHide = document.querySelector('.city-hide');




search.addEventListener('click', () => {
  const APIKey = '82f29b8ba21f22479722982b5d19189f'; //change for your code
  const city = document.querySelector('.search-box input').value;

  if (city === "") return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`) 
   .then((response) => response.json())
   .then((json) => {

            


        if(json.cod == 404) {
            cityHide.textContent = city;
            container.style.height = '400px';
            error404.classList.add('active');
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            return;
            //error404.style.display = 'block';
        }


        const image = weatherBox.querySelector('img');
        const temperature = weatherBox.querySelector('.temperature');
        const description = weatherBox.querySelector('.description');
        const humidity = weatherDetails.querySelector('.humidity span');
        const wind = weatherDetails.querySelector('.wind span');

        


        if (cityHide.textContent == city){
            return;
           
        }
        else {
            
            
            /*setTimeout(() => {
                //remove to do the animation again
                weatherBox.classList.remove('active');
                weatherDetails.classList.remove('active');
                
                //main thing to do
                setTimeout(() => {
                    cityHide.textContent = city;

                    container.style.height = '555px';
                    error404.classList.remove('active');
                    container.classList.add('active');
                    weatherBox.classList.add('active');
                    weatherDetails.classList.add('active');
        
                    setTimeout (() => {
                        container.classList.remove('active');
                    }, 2500)
        
                    switch (json.weather[0].main) {
                        case 'Clear':
                          image.src = './sun.png';
                          break;
                        case 'Rain':
                          image.src = './heavy-rain.png';
                          break;
                        case 'Snow':
                          image.src = './snow.png';
                          break;
                        case 'Clouds':
                          image.src = './cloudy.png';
                          break;
                        case 'Mist':
                          image.src = './fog.png';
                          break;
                        case 'Haze':
                          image.src = './fog.png';
                          break;
                        default:
                          image.src = './cloudy.png';
                    }
              
                    temperature.innerHTML = `${parseInt(json.main.temp)}<span>ºC</span>`;
                    description.innerHTML = `${json.weather[0].description}`;
                    humidity.innerHTML = `${json.main.humidity}%`;
                    wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
        
        
                    const infoWeather = document.querySelector('.info-weather');
                    const infoHumidity = document.querySelector('.info-humidity');
                    const infoWind = document.querySelector('.info-wind');
        
        
                    /* Remove existing clones before creating new ones
                    const existingClones = document.querySelectorAll('.active-clone');
                    setTimeout (() => {
                       existingClones.forEach((clone) => clone.remove());
                    }, 1000);
                    
                     Remove existing clones before creating new ones
                    const existingClones = document.querySelectorAll('.active-clone');
                    existingClones.forEach((clone) => clone.remove());*/
        
                    /*const elCloneInfoWeather = infoWeather.cloneNode(true);
                    const elCloneInfoHumidity = infoHumidity.cloneNode(true);
                    const elCloneInfoWind = infoWind.cloneNode(true);
        
        
                    elCloneInfoWeather.id = 'clone-info-weather';
                    elCloneInfoWeather.classList.add('active-clone');
        
                    elCloneInfoHumidity.id = 'clone-info-humidity';
                    elCloneInfoHumidity.classList.add('active-clone');
        
                    elCloneInfoWind.id = 'clone-info-wind';
                    elCloneInfoWind.classList.add('active-clone');
        
                    setTimeout (() => {
                        infoWeather.insertAdjacentElement("afterend", elCloneInfoWeather);
                        infoHumidity.insertAdjacentElement("afterend", elCloneInfoHumidity);
                        infoWind.insertAdjacentElement("afterend", elCloneInfoWind);
                    }, 2200);
        
                    const cloneInfoWeather = document.querySelectorAll(".info-weather.active-clone");
                    const totalCloneInfoWeather = cloneInfoWeather.length;
                    const cloneInfoWeatherFirst = cloneInfoWeather[0];
        
                    const cloneInfoHumidity = document.querySelectorAll(".info-humidity.active-clone");
                    const cloneInfoHumidityFirst = cloneInfoHumidity[0];
        
                    const cloneInfoWind = document.querySelectorAll(".info-wind.active-clone");
                    const cloneInfoWindFirst = cloneInfoWind[0];
        
                    if(totalCloneInfoWeather > 0) {
                        cloneInfoWeatherFirst.classList.remove('active-clone');
                        cloneInfoHumidityFirst.classList.remove('active-clone');
                        cloneInfoWindFirst.classList.remove('active-clone');
                    
                        setTimeout (() => {
                            cloneInfoWeatherFirst.remove();
                            cloneInfoHumidityFirst.remove();
                            cloneInfoWindFirst.remove();
                        }, 200);
                    }
        
                }, 1);
            }, 2); */

            cityHide.textContent = city;

            container.style.height = '555px';
            error404.classList.remove('active');
            container.classList.add('active');
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');

            setTimeout (() => {
                container.classList.remove('active');
            }, 2500)

            switch (json.weather[0].main) {
                case 'Clear':
                  image.src = './sun.png';
                  break;
                case 'Rain':
                  image.src = './heavy-rain.png';
                  break;
                case 'Snow':
                  image.src = './snow.png';
                  break;
                case 'Clouds':
                  image.src = './cloudy.png';
                  break;
                case 'Mist':
                  image.src = './fog.png';
                  break;
                case 'Haze':
                  image.src = './fog.png';
                  break;
                default:
                  image.src = './cloudy.png';
            }
      
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>ºC</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            const existingClones = document.querySelectorAll('.active-clone');
            existingClones.forEach((clone) => clone.remove());
           
            const infoWeather = document.querySelector('.info-weather');
            const infoHumidity = document.querySelector('.info-humidity');
            const infoWind = document.querySelector('.info-wind');

            const elCloneInfoWeather = infoWeather.cloneNode(true);
            const elCloneInfoHumidity = infoHumidity.cloneNode(true);
            const elCloneInfoWind = infoWind.cloneNode(true);


            elCloneInfoWeather.id = 'clone-info-weather';
            elCloneInfoWeather.classList.add('active-clone');

            elCloneInfoHumidity.id = 'clone-info-humidity';
            elCloneInfoHumidity.classList.add('active-clone');

            elCloneInfoWind.id = 'clone-info-wind';
            elCloneInfoWind.classList.add('active-clone');

            setTimeout (() => {
                infoWeather.insertAdjacentElement("afterend", elCloneInfoWeather);
                infoHumidity.insertAdjacentElement("afterend", elCloneInfoHumidity);
                infoWind.insertAdjacentElement("afterend", elCloneInfoWind);
                
            }, 1200);

            const cloneInfoWeather = document.querySelectorAll(".info-weather.active-clone");
            const totalCloneInfoWeather = cloneInfoWeather.length;
            const cloneInfoWeatherFirst = cloneInfoWeather[0];

            const cloneInfoHumidity = document.querySelectorAll(".info-humidity.active-clone");
            const cloneInfoHumidityFirst = cloneInfoHumidity[0];

            const cloneInfoWind = document.querySelectorAll(".info-wind.active-clone");
            const cloneInfoWindFirst = cloneInfoWind[0];

            if(totalCloneInfoWeather > 0) {
                cloneInfoWeatherFirst.classList.remove('active-clone');
                cloneInfoHumidityFirst.classList.remove('active-clone');
                cloneInfoWindFirst.classList.remove('active-clone');
                
            
                setTimeout (() => {
                    cloneInfoWeatherFirst.remove();
                    cloneInfoHumidityFirst.remove();
                    cloneInfoWindFirst.remove();
                }, 2000);
            }
            




            
            
        }

    })
   .catch((error) => console.error('Error:', error));

});

