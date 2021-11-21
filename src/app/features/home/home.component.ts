import { Component, OnInit } from '@angular/core';
import { ReviewCard } from 'src/app/shared/models/review-card.model';
import { ReviewService } from 'src/app/shared/services/review.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isLoading: boolean = true;

  public reviews: Array<ReviewCard> = [];

  constructor(
    private reviewService: ReviewService
  ) { }

  ngOnInit(): void {
    this.reviewService.getAll().subscribe((data) => {
      this.reviews = data;
      this.isLoading = false;
    });

  }

}
