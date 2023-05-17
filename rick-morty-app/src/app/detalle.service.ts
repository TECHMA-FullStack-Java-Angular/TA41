import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  constructor(private http: HttpClient) {}

  fetchCharacter(id: number) {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    return this.http.get<any>(url);
  }
  
}
