import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { loginStart } from '../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private store: Store<AppState>) {
    this.loginForm=new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
   }

  ngOnInit(): void {
    
  }

  submitLoginForm(){
    let email=this.loginForm.value.email;
    let password=this.loginForm.value.password;
    this.store.dispatch(loginStart({email, password}));
  }
}
