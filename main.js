async function displayWeather() {
    const get = await getData();
    const display = await displayData(get);

    return display;
}

function getData() {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=Brasov,ro&appid=696dd88412b6e63a0604de6c8b0139cf';
    return fetch(url)
            .then(convertResToJson);
}

function convertResToJson(res) {
    return res.json();
}

let temp;

function displayData(data) {
    const temperature = data.main.temp;
    const show = document.querySelector('.js-temp');

    getStoredValue();

    if(document.querySelector('#' + temp).value === 'c') {
        show.innerHTML = (temperature - 273.15).toFixed(1);
    } else if(document.querySelector('#' + temp).value === 'f') {
        show.innerHTML = (temperature - 273.15).toFixed(1) * 9 / 5 + 32;
    }
}

document.addEventListener('click', changeValue);

function changeValue(e) {
    if(e.target.name === 'temp') {
        localStorage.setItem('temp', e.target.value);
        document.cookie = 'temp=' + e.target.value;
        window.location.reload();
    }
}

function getStoredValue() {
    if(localStorage) {
        temp = localStorage.getItem('temp');
    } else {
        document.cookie.split('=')[1];
    }

    if(temp) {
        document.querySelector('#' + temp).setAttribute('checked', true);
    }
}

displayWeather();
