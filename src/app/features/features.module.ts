import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { SignUpModule } from './signup/signup.module';


@NgModule({
  imports: [
    SignUpModule,
    LoginModule,
    HomeModule,
  ],
  exports: [
    SignUpModule,
    LoginModule,
    HomeModule,
  ],
})
export class FeaturesModule { }
