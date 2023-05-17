import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

    // Inyección de HttpClient en el constructor
    constructor(private http: HttpClient) {}

    fetchCharacters() {
      console.log (this.http.get<any>('https://rickandmortyapi.com/api/character'));
      return this.http.get<any>('https://rickandmortyapi.com/api/character');
    }
    
  } 
