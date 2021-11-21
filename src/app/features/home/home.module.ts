import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { ReviewCardComponent } from './review-card/review-card.component';
import { BarRatingModule } from 'ngx-bar-rating';


@NgModule({
  declarations: [HomeComponent, ReviewCardComponent],
  exports: [HomeComponent, HomeRoutingModule],
  imports: [HomeRoutingModule, RouterModule, FormsModule, ReactiveFormsModule, NgSelectModule, CommonModule, BarRatingModule]
})
export class HomeModule { }
