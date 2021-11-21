import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarRatingModule } from 'ngx-bar-rating';
import { ReviewDetailsRoutingModule } from './review-details-routing.module';
import { ReviewDetailsComponent } from './review-details.component';

@NgModule({
  declarations: [ReviewDetailsComponent],
  exports: [ReviewDetailsComponent, ReviewDetailsRoutingModule],
  imports: [ReviewDetailsRoutingModule, CommonModule, BarRatingModule]
})
export class ReviewDetailsModule { }
