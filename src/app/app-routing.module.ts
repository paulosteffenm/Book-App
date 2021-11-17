import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./features/login/login.module').then((m) => m.LoginModule), canActivate: [AuthGuard] },
  { path: 'sign-up', loadChildren: () => import('./features/signup/signup.module').then((m) => m.SignUpModule) },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule) },
  { path: 'submitReview', loadChildren: () => import('./features/create-review/create-review.module').then((m) => m.CreateReviewModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
