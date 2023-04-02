import { Component } from '@angular/core';
import { Forecast, Weather } from '../weather';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  weather: Weather | undefined;
  forecast$: Observable<Forecast[]> | undefined;

  constructor(private weatherService: WeatherService){ }

  search(city: string) {
    this.weatherService.getWeather(city).subscribe(weather => this.weather = weather);
    this.forecast$ = this.weatherService.getForecast(city);
  }

}
