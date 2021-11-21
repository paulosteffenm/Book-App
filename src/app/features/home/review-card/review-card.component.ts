import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewCard } from 'src/app/shared/models/review-card.model';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  @Input()
  public review: ReviewCard;

  public openDetail(): void {
    this.router.navigate([`reviewDetails/${this.review.id}`]);
  }

  ngOnInit(): void {
  }

}
