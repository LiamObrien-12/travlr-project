import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private url = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) { }

  getTrips(): Observable<any> {
    return this.http.get(this.url);
  }

  getTrip(tripCode: string): Observable<any> {
    return this.http.get(`${this.url}/${tripCode}`);
  }

  addTrip(trip: any): Observable<any> {
    return this.http.post(this.url, trip);
  }

  updateTrip(trip: any): Observable<any> {
    return this.http.put(`${this.url}/${trip.code}`, trip);
  }

  deleteTrip(tripCode: string): Observable<any> {
    return this.http.delete(`${this.url}/${tripCode}`);
  }
}
