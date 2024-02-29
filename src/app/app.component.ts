import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ForecastLocationService } from '../../src/app/services/forecastLocation.service';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    HomeComponent,
    RouterOutlet,
    RouterLink
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private forecastLocationService: ForecastLocationService) {
  }

}

export interface ForecastLocation {
  id: number;
  name: string;
  state: string;
}

export interface TemeratureState {
  id: number;
  locationId: number;
  minTemp: number;
  maxTemp: number;
  unit: string;
}

export interface WindState {
  id: number;
  locationId: number;
  direction: string;
  speed: number;
  unit: string;
}

export interface Cloudiness {
  id: number;
  locationId: number;
  description: string;
}

export interface ForecastUnit {
  id: number;
  forecastLocation: ForecastLocation;
  temperatureState: TemeratureState;
  windState: WindState;
  cloudiness: Cloudiness;
}
