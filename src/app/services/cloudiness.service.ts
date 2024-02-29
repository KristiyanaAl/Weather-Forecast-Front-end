import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Cloudiness } from '../app.component';
import { CLOUDINESS } from '../mocks/mock-cloudiness';

@Injectable({
  providedIn: 'root',
})
export class CloudinessService {

  constructor() { }

  getCloudiness(): Observable<Cloudiness[]> {
    const cloudiness = of(CLOUDINESS);
    return cloudiness;
  }
}
