import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ForecastLocation, TemeratureState, WindState, Cloudiness, ForecastUnit } from '../app.component';
import { ForecastLocationService } from '../services/forecastLocation.service';
import { TemperatureStateService } from '../services/temperatureStates.service';
import { CloudinessService } from '../services/cloudiness.service';
import { WindStateService } from '../services/windState.service';


@Component({
  selector: 'app-daily-forecast',
  standalone: true,
  templateUrl: './daily-forecast.component.html',
  imports: [
    RouterOutlet,
    RouterLink
  ]
})
export class DailyForecastComponent {
  public forecastLocation!: ForecastLocation;
  public temperatureState!: TemeratureState;
  public windState!: WindState;
  public cloudiness!: Cloudiness;
  forecastLocationId = -1;

  constructor(private route: ActivatedRoute,
    private forecastLocationService: ForecastLocationService,
    private temperatureStateService: TemperatureStateService,
    private cloudinessService: CloudinessService,
    private windStateService: WindStateService) {
    this.forecastLocationId = Number(this.route.snapshot.params['id']);
    this.forecastLocationService.getForecastLocations().subscribe((forecastLocations$: ForecastLocation[]) => {
      this.forecastLocation = forecastLocations$.filter(fl => fl.id === this.forecastLocationId).shift()!;
    });
    this.temperatureStateService.getTemperatureState().subscribe((temperatureState$: TemeratureState[]) => {
      this.temperatureState = temperatureState$.filter(fl => fl.locationId === this.forecastLocationId).shift()!;
    });
    this.cloudinessService.getCloudiness().subscribe((cloudiness$: Cloudiness[]) => {
      this.cloudiness = cloudiness$.filter(fl => fl.locationId === this.forecastLocationId).shift()!;
    });
    this.windStateService.getWindState().subscribe((windState$: WindState[]) => {
      this.windState = windState$.filter(fl => fl.locationId === this.forecastLocationId).shift()!;
    });
    //this.forecastLocation = {
    //  id: 1,
    //  name: 'New York',
    //  state: 'New York'
    //}

    //this.temperatureState = {
    //  id: 1,
    //  minTemp: 0,
    //  maxTemp: 14,
    //  unit: '°C'
    //}

    //this.windState = {
    //  id: 1,
    //  direction: 'N',
    //  speed: 20,
    //  unit: 'km/h'
    //}
    //this.cloudiness = {
    //  id: 1,
    //  description: 'cloudy'
    //}
  }
}
