import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ForecastLocationService } from '../services/forecastLocation.service';
import { ForecastLocation } from '../app.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports:[
    RouterOutlet,
    RouterLink,
    NgFor
  ]
})
export class HomeComponent {
  title = 'Weather Forecast';
  public forecastLocations: ForecastLocation[];


  constructor(private forecastLocationService: ForecastLocationService) {
    this.forecastLocations = [];
    this.forecastLocationService.getForecastLocations().subscribe((forecastLocations$: ForecastLocation[]) => {
      this.forecastLocations = forecastLocations$;
    });
  }
}
