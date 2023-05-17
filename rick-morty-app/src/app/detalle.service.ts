import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {
  private url = 'http://localhost:3000/characters';

  constructor(private http: HttpClient) {}

  fetchCharacter(id: number) {
    const url = `http://localhost:3000/characters/${id}`;
    return this.http.get<any>(url);
  }
  
  // Show lists of item
  list(): Observable<any> {
    return this.http.get(this.url).pipe(
      catchError(this.handleError)
    );
  }

  // Create new item
  getItem(id: any): Observable<any> {
    return this.http.get(`${this.url}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  create(data: any): Observable<any> {
    return this.http.post(this.url, data).pipe(
      catchError(this.handleError)
    );
  }

  // Edit/ Update
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Delete
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Search By Title
  filterByTitle(title: any): Observable<any> {
    return this.http.get(`${this.url}?title_like=${title}`).pipe(
      catchError(this.handleError)
    );
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}

