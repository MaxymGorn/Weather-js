class UI {
    constructor() {
        // UI variables
        this.location = document.getElementById("location");
        this.weatherDesc = document.getElementById("weather-desc");
        this.temperature = document.getElementById("weather-temp");
        this.precipitationSummary = document.getElementById("precipitation-value");
        this.windSpeed = document.getElementById("wind-value");      
        this.pressureValue = document.getElementById("pressure-value");
        this.dateValue= document.getElementById("date-day");
        //this.weekList= document.getElementById("week-list");
    }
    showResultsLocation(locationInfo) {
        this.location.innerHTML = `${locationInfo.name}, ${locationInfo.country}`;
        const today = moment();
        let date=today.format('DD MMMM YYYY');
        this.dateValue.innerHTML=date;
    }
    showFiveDays(results){
       $(".week-list").html("");
        let iterator=0;
          results.forEach(element => {
          let forecast = element.Day.Icon;
          let day = moment(element.Date).format('ddd');
          let temp = element.Temperature.Minimum.Value + '/' + element.Temperature.Maximum.Value;
          let rain = element.Day.RainProbability + '%';
          let sun = moment(element.Sun.Rise, 'YYYY-MM-DDThh:mm:ss').format('h:mm') + ' AM/' +  moment(element.Sun.Set, 'YYYY-MM-DDThh:mm:ss').format('h:mm') + ' PM';
  
          let table = `
            <tr>
              <td>${day}</td>
              <td><img src='images/${forecast}-s.png'></td>
              <td>${temp} °F</td>
              <td>${rain}</td>
              <td>${sun}</td>
            </tr>
          `;
              let classStr=iterator===0? "active":"box shadow";
           let list = `
        <li class="${classStr} sm-days"><img src='../images/${forecast}-s.png'> <span class="day-name">${day}</span><span class="day-temp">${temp} °F</span></li>
          `
        $(".week-list").append(list);
              ++iterator;
        });
    }

    showWeatherInfo(weatherInfo) {
                console.log(`${weatherInfo.WeatherText}`);
        this.weatherDesc.innerHTML = ` ${weatherInfo.WeatherText}`;
        this.temperature.innerHTML = ` ${weatherInfo.Temperature.Metric.Value} ${weatherInfo.Temperature.Metric.Unit}`;
        this.windSpeed.innerHTML = ` ${weatherInfo.Wind.Speed.Metric.Value} ${weatherInfo.Wind.Speed.Metric.Unit}`;
        this.pressureValue.innerHTML = `${weatherInfo.Pressure.Metric.Value} ${weatherInfo.Pressure.Metric.Unit}`;
        this.precipitationSummary.innerHTML = ` ${weatherInfo.PrecipitationSummary.Past24Hours.Metric.Value} ${weatherInfo.PrecipitationSummary.Past24Hours.Metric.Unit}`;     
    }

}

