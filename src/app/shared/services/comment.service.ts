import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SubmitComment } from '../models/submit-comment.model';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private get defaultHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${localStorage.getItem('userKey') ?? ''}`,
    });
  }

  constructor(private apiService: ApiService) { }

  public getById(reviewId: number): Observable<Array<Comment>> {
    const httpsOptions = {
      headers: this.defaultHeaders,
    };

    return this.apiService.get(`comment`, httpsOptions).pipe(
      map((comments) => {
        return comments.filter((comment: Comment) => comment.review_id === reviewId)
      })
    );
  }

  public submit(submitComment: SubmitComment): Observable<string> {
    const httpsOptions = {
      headers: this.defaultHeaders,
    };
    return this.apiService.post('comment', submitComment, httpsOptions);
  }

}
