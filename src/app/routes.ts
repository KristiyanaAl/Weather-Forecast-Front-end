import { Routes } from '@angular/router';
import { DailyForecastComponent } from './daily-forecast/daily-forecast.component';
import { HomeComponent } from './home/home.component';

import { FiveDaysForecastComponent } from './five-days-forecast/five-days-forecast.component'
import { TenDaysForecastComponent } from './ten-days-forecast/ten-days-forecast.component'

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'dailyForecast/:id',
    component: DailyForecastComponent,
    title: 'Home details'
  },
  {
    path: 'fiveDayForecast/:id',
    component: FiveDaysForecastComponent,
    title: 'Five Days Forecast'
  },
  {
    path: 'tenDayForecast/:id',
    component: TenDaysForecastComponent,
    title: 'Ten Days Forecast'
  }
];

export default routeConfig;
