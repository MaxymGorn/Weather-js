// get instance of AccuWeather class
const accuWeather = new AccuWeather();
// get instance of UI
const ui = new UI();
const input = document.getElementById("input-city-name");
input.addEventListener('keyup', getCityName);
$('.location-button').click(function() {
        getCityNameWithValue(input.value);
});
$( document ).ready(function() {
    getCityNameWithValue("Kyiv");
});
function getCityName(e) {
    if (e.keyCode === 13) {
        console.log(e.target.value);
        accuWeather.getCityInfo(e.target.value)
            .then(resp => {
                ui.showResultsLocation(resp);
                accuWeather.changeLocationId(resp.key);
                getSelectedCityId(resp.key);
                getCurrentCondition(resp);
            })
            .catch(err => alert(err));
    }
}
function getCityNameWithValue(value) {
        accuWeather.getCityInfo(value)
            .then(resp => {
                console.log(resp);
                ui.showResultsLocation(resp);
                getSelectedCityId(resp.key);
                getCurrentCondition(resp);
            })
            .catch(err => alert(err));
    
}

function getCurrentCondition(cityInfo) {
    accuWeather.getCurrentWeather()
        .then(resp => {
            console.log(resp);
            ui.showWeatherInfo(resp[0]);
        });
}

function getSelectedCityId(cityId){
        accuWeather.getCurrentWeatherSevenDays(cityId).then((response)=>{
            console.log(response);
                    let results = response.DailyForecasts;
        ui.showFiveDays(results);

        });

    }
                                             
