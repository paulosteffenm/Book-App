import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { UserLogin } from 'src/app/shared/models/user-login.model';
import { RootObject } from 'src/app/shared/models/error.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    User: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
  });

  constructor(
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  public login(): void {
    if (!this.loginForm.valid) {
      this.toastrService.error('Some fields are invalidd');
      return;
    }
    const userLogin: UserLogin = {
      email: this.loginForm.get('User')?.value,
      password: this.loginForm.get('Password')?.value,
    }
    this.userService.login(userLogin).subscribe((token) => {
      localStorage.setItem('userKey', token);
      this.router.navigate(['home']);
    },
      (error: RootObject ) => {
        console.log(error)
        if (error.error.message === 'USER_NOT_FOUND') {
          this.toastrService.error('User was not found');
        } else {
          this.toastrService.error('Something went wrong');
        }
      }
    );

  }

  ngOnInit(): void {
    const user = localStorage.getItem('userKey');
    if (user !== null && user !== undefined) {
      this.router.navigate(['home']);
    }
  }

}
