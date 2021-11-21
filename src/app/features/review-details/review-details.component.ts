import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, of, pipe } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Book } from 'src/app/shared/models/book.model';
import { ReviewCard } from 'src/app/shared/models/review-card.model';
import { BookService } from 'src/app/shared/services/book.service';
import { ReviewService } from 'src/app/shared/services/review.service';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.scss']
})
export class ReviewDetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private reviewService: ReviewService,
    private bookService: BookService,
  ) { }

  public reviewCard: ReviewCard;
  public book: Book;
  public isLoading = true;
  ngOnInit(): void {
    const reviewId = this.activatedRoute.snapshot.paramMap.get('reviewId') as string;
    this.reviewService.getById(Number(reviewId)).pipe(
      switchMap((reviewCard: ReviewCard) => {
        return forkJoin([
          of(reviewCard),
          this.bookService.getBookById(reviewCard.book_id)
        ])
      })
    ).subscribe(([reviewCard, book]) => {
      this.reviewCard = reviewCard;
      this.book = book;

      this.isLoading = false;
    });
  }

}
