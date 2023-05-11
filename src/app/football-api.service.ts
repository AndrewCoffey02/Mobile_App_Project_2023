import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FootballApiService {

  constructor(private http: HttpClient) { }

  FootballStats():Observable<any> {
      return this.http.get('http://www.omdbapi.com/?apikey=b0102157&s=%27war%27'); 
  }
}
