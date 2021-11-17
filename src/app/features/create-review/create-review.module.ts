import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { BarRatingModule } from 'ngx-bar-rating';
import { CreateReviewRoutingModule } from './create-review-routing.module';
import { CreateReviewComponent } from './create-review.component';

@NgModule({
  declarations: [CreateReviewComponent],
  exports: [CreateReviewComponent, CreateReviewRoutingModule],
  imports: [CreateReviewRoutingModule, RouterModule, FormsModule, ReactiveFormsModule, BarRatingModule, NgSelectModule, CommonModule ]
})
export class CreateReviewModule { }
