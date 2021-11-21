import { NgModule } from '@angular/core';
import { CreateReviewModule } from './create-review/create-review.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { ReviewDetailsModule } from './review-details/review-details.module';
import { SignUpModule } from './signup/signup.module';

@NgModule({
  imports: [
    SignUpModule,
    LoginModule,
    HomeModule,
    ReviewDetailsModule,
    CreateReviewModule
  ],
  exports: [
    SignUpModule,
    LoginModule,
    HomeModule,
    ReviewDetailsModule,
    CreateReviewModule
  ]
})
export class FeaturesModule { }
