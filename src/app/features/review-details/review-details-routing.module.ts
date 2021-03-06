import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewDetailsComponent } from './review-details.component';

const routes: Routes = [
  { path: '', component: ReviewDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewDetailsRoutingModule { }
