(function() {
    navigator.geolocation.getCurrentPosition(getCoordinates, console.warn);

    function getCoordinates(data) {
        const latitude = data.coords.latitude;
        const longitude = data.coords.longitude;      
        
        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=696dd88412b6e63a0604de6c8b0139cf`;

        fetch(url)
            .then(res => res.json())
            .then(display);

        function display(data) {
            const weather = document.querySelector('.js-weather');
            const description = document.querySelector('.js-description');
            const temp = document.querySelector('.js-temp');

            weather.innerHTML = 'Weather in ' + data.name + ':';
            description.innerHTML = data.weather[0].main + ', ' + data.weather[0].description;
            temp.innerHTML = 'Temperature: ' + (data.main.temp - 273.15).toFixed(1) + ' &#8451;';

            document.body.append(weather, description, temp);
        }
        
    }
})();