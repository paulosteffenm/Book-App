import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { UserLogin } from '../models/user-login.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private get defaultHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'x-apikey': localStorage.getItem('userKey') ?? '',
    });
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  public get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    const httpsOptions = {
      headers: this.defaultHeaders,
      params,
    };
    return this.http.get<any>(`${environment.baseUrl}${path}`, httpsOptions).pipe(catchError(this.formatErrors));
  }

  public post(path: string, body: Object): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}${path}`, body).pipe(catchError(this.formatErrors));
  }
}
