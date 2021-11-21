import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of, Subject, concat, fromEvent } from 'rxjs';
import { catchError, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Book } from 'src/app/shared/models/book.model';
import { SubmitReview } from 'src/app/shared/models/submit-review.model';
import { BookService } from 'src/app/shared/services/book.service';
import { ReviewService } from 'src/app/shared/services/review.service';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.scss']
})
export class CreateReviewComponent implements OnInit {

  public books$: Observable<Array<any>>;
  public bookLoading = false;
  public bookInput$ = new Subject<string>();

  public createReviewForm: FormGroup = new FormGroup({
    Title: new FormControl('', Validators.required),
    Book: new FormControl('', Validators.required),
    Review: new FormControl('', Validators.required),
    Rating: new FormControl(1, Validators.required),
  });

  constructor(
    private bookService: BookService,
    private toastrService: ToastrService,
    private reviewService: ReviewService,
    private router: Router
  ) { }

  private loadBook(): void {
    this.books$ = concat(
      of([]),
      this.bookInput$.pipe(
        distinctUntilChanged(),
        tap(() => this.bookLoading = true),
        switchMap(term => this.bookService.getBook(term).pipe(
          catchError(() => of([])),
          tap(() => {
            this.bookLoading = false;
          })
        ))
      )
    );
  }

  public trackByFn(item: Book): string | undefined {
    return item.Title;
  }

  public submitReview(): void {
    if (!this.createReviewForm.valid) {
      this.toastrService.error('Fill all the mandatory fields!');
      return;
    }

    const submitReview: SubmitReview = {
      title: this.createReviewForm.get('Title')?.value,
      book_id: this.createReviewForm.get('Book')?.value.Id,
      score: this.createReviewForm.get('Rating')?.value.toString(),
      text: this.createReviewForm.get('Review')?.value,
    }

    this.reviewService.submit(submitReview).subscribe(() => this.router.navigate(['home']));
  }

  public isInvalid(field: string): boolean {
    return (this.createReviewForm.controls[field].invalid && (this.createReviewForm.controls[field].dirty || this.createReviewForm.controls[field].touched));
  }

  ngOnInit(): void {
    this.loadBook();
  }

}
