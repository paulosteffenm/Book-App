import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent, LoginRoutingModule],
  imports: [LoginRoutingModule, RouterModule, FormsModule, ReactiveFormsModule]
})
export class LoginModule { }
