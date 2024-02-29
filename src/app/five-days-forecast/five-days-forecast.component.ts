import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ForecastLocation, TemeratureState, WindState, Cloudiness, ForecastUnit } from '../app.component';
import { ForecastLocationService } from '../services/forecastLocation.service';
import { TemperatureStateService } from '../services/temperatureStates.service';
import { CloudinessService } from '../services/cloudiness.service';
import { WindStateService } from '../services/windState.service';

@Component({
  selector: 'app-five-days-forecast',
  standalone: true,
  templateUrl: './five-days-forecast.component.html',
  styleUrls: ['./five-days-forecast.component.css'],
  imports: [
    NgFor
  ]
})
export class FiveDaysForecastComponent {

  public forecastLocation!: ForecastLocation;
  public temperatureStates!: TemeratureState[];
  public windStates!: WindState[];
  public cloudinesses!: Cloudiness[];
  public forecastUnits: ForecastUnit[];
  forecastLocationId = -1;
  temperatureStateId = -1;
  cloudinessId = -1;
  windStateId = -1;

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
      this.temperatureStates = temperatureState$.filter(fl => fl.locationId === this.forecastLocationId);
    });
    this.cloudinessService.getCloudiness().subscribe((cloudiness$: Cloudiness[]) => {
      this.cloudinesses = cloudiness$.filter(fl => fl.locationId === this.forecastLocationId);
    });
    this.windStateService.getWindState().subscribe((windState$: WindState[]) => {
      this.windStates = windState$.filter(fl => fl.locationId === this.forecastLocationId);
    });
    this.forecastUnits = [];
    for (var index = 0; index < 5; index++) {
      var currentForecastUnit: ForecastUnit = {
        id: index,
        forecastLocation: this.forecastLocation,
        temperatureState: this.temperatureStates[index],
        windState: this.windStates[index],
        cloudiness: this.cloudinesses[index]
      }

      this.forecastUnits.push(currentForecastUnit);
    }
  }

}
