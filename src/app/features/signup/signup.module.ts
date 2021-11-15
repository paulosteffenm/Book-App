import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignUpRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

@NgModule({
  declarations: [SignupComponent],
  exports: [SignupComponent, SignUpRoutingModule],
  imports: [SignUpRoutingModule, RouterModule, FormsModule, ReactiveFormsModule]
})
export class SignUpModule { }
