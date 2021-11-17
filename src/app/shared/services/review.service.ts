import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/user-login.model';
import { ApiService } from './api.service';
import { SignUp } from '../models/sign-up.model';
import { SubmitReview } from '../models/submit-review.model';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private get defaultHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${localStorage.getItem('userKey') ?? ''}`,
    });
  }

  constructor(private apiService: ApiService) { }

  public submit(submitReview: SubmitReview): Observable<string>{
    const httpsOptions = {
      headers: this.defaultHeaders,
    };
    console.log(localStorage.getItem('userKey'));
    return this.apiService.post('review', submitReview, httpsOptions);
  }

}
