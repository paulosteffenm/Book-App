import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignUp } from 'src/app/shared/models/sign-up.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signUpForm: FormGroup = new FormGroup({
    Name: new FormControl('', Validators.nullValidator),
    LastName: new FormControl('', Validators.nullValidator),
    Email: new FormControl('', Validators.nullValidator),
    Password: new FormControl('', Validators.nullValidator),
  });

  constructor(
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router
    ) { }

  public signUp(): void {
    if(!this.signUpForm.valid){
      this.toastrService.error('Some fields are invalid');
      return;
    }
    const userLogin: SignUp = {
      name: this.signUpForm.get('Name')?.value,
      surname: this.signUpForm.get('LastName')?.value,
      email: this.signUpForm.get('Email')?.value,
      password: this.signUpForm.get('Password')?.value,
    }
    this.userService.signUp(userLogin).subscribe((token) => {
      localStorage.setItem('userKey', token);
      this.router.navigate(['home']);
    });

  }

  ngOnInit(): void {
  }

}
