import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../authentication/auth.service';
import { SpinnerService } from '../shared/spinner/spinner.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public togglePwd = false;
  public errorMsg: string = '';
  public pwdLinktxt: string = 'Show Password';
  public inputType = "password";
  public classIcon: string;

  constructor(private spinner: SpinnerService, private readonly fb: FormBuilder, private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.classIcon = 'fa fa-eye';
  }

  get formControls() { return this.loginForm.controls; }

  onSubmit() {
    this.authenticate();
  }

  authenticate() {
    this.errorMsg = "";
    this.showSpinner();
    this.router.navigate(['/dashboard'], { relativeTo: this.route });

    // this.spinner.activate();
    // if (this.authService.authenticate(this.loginForm.value)) {
    //   this.spinner.deactivate();
    //   this.router.navigate(['/dashboard'], { relativeTo: this.route });
    // } else {
    //   this.spinner.deactivate();
    //   this.errorMsg = "Please enter valid Username or Password!";
    // }

    // this.spinner.activate();
    // this.authService.authenticate(this.loginForm.value).subscribe((res: User) => {
    //   if (res.status == "SUCCESS") {
    //     this.spinner.deactivate();
    //     this.router.navigate(['/dashboard'], { relativeTo: this.route });
    //   } else {
    //     this.spinner.deactivate();
    //     this.errorMsg = "Please enter valid Username or Password!";
    //   }
    // });

  }

  showHidePassword() {
    this.togglePwd = !this.togglePwd;
    if (!this.togglePwd) {
      this.pwdLinktxt = 'Hide Password';
      this.inputType = "text";
      this.classIcon = 'fa fa-eye-slash';
    } else {
      this.pwdLinktxt = 'Show Password';
      this.inputType = "password";
      this.classIcon = 'fa fa-eye';
    }
  }

  showSpinner() {
    this.spinner.activate();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.deactivate();
    }, 3000);
  }

}
