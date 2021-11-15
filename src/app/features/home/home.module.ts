import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent, HomeRoutingModule],
  imports: [HomeRoutingModule, RouterModule, FormsModule, ReactiveFormsModule, NgSelectModule, CommonModule]
})
export class HomeModule { }
