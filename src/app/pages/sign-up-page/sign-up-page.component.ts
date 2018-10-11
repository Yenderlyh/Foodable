import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
})
export class SignUpPageComponent implements OnInit {
  feedbackEnabled = false;
  error = null;
  processing = false;
  username: string;
  password: string;
  
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      const user = {
        username: this.username,
        password: this.password
      }
      this.authService.signup(user)
        .then((result) => {
          this.router.navigate(['/home']);
        })
        .catch((err) => {
          this.error = err.error.code; // :-)
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }
  
}
