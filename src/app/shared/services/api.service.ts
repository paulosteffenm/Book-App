import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { UserLogin } from '../models/user-login.model';
import { Root } from '../models/root.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  googleApiGet(
    path: string,
  ): Observable<Root> {
    return this.http
      .get<Root>(`${environment.googleApi}${path}`)
      .pipe(
        map((data: Root) => data),
      )
      .pipe(catchError(this.formatErrors));
  }

  public get(path: string): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}${path}`).pipe(catchError(this.formatErrors));
  }

  public post(path: string, body: Object, options: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}${path}`, body, options).pipe(catchError(this.formatErrors));
  }
}
