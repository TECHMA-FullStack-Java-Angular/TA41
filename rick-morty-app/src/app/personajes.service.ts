import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) {}

  fetchCharacters() {
    return this.http.get<any>('http://localhost:3000/characters');
  }
}
