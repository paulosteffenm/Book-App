import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarRatingModule } from 'ngx-bar-rating';
import { ReviewDetailsRoutingModule } from './review-details-routing.module';
import { ReviewDetailsComponent } from './review-details.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReviewDetailsComponent, CommentsComponent],
  exports: [ReviewDetailsComponent, ReviewDetailsRoutingModule],
  imports: [ReviewDetailsRoutingModule, CommonModule, BarRatingModule, ReactiveFormsModule]
})
export class ReviewDetailsModule { }
