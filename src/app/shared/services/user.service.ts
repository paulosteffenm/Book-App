import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/user-login.model';
import { ApiService } from './api.service';
import { SignUp } from '../models/sign-up.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  public login(userLogin: UserLogin): Observable<string>{

    return this.apiService.post('user/login', userLogin).pipe(map((token: any) => token.token));
  }

  public signUp(signUp: SignUp): Observable<string>{
    return this.apiService.post('user/register', signUp).pipe(map((token: any) => token.token));
  }
}
