import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/user-login.model';
import { ApiService } from './api.service';
import { SignUp } from '../models/sign-up.model';
import { SubmitReview } from '../models/submit-review.model';
import { HttpHeaders } from '@angular/common/http';
import { ReviewCard } from '../models/review-card.model';
import { find, map } from 'rxjs/operators';


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

  public getAll(): Observable<Array<ReviewCard>> {
    const httpsOptions = {
      headers: this.defaultHeaders,
    };

    return this.apiService.get('review', httpsOptions);
  }

  public getById(reviewId: number): Observable<ReviewCard> {
    const httpsOptions = {
      headers: this.defaultHeaders,
    };

    return this.apiService.get(`review`, httpsOptions).pipe(
      map((reviews) => {
        return reviews.find((review: ReviewCard) => review.id === reviewId)
      })
    );
  }

  public submit(submitReview: SubmitReview): Observable<string> {
    const httpsOptions = {
      headers: this.defaultHeaders,
    };
    return this.apiService.post('review', submitReview, httpsOptions);
  }

}
