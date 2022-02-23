import { AuthService } from './../auth.service';
import { IFormData } from './../typedefs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginValues: IFormData = {
    username: "",
    password: ""
  }
  constructor(private auth: AuthService) { }

  ngOnInit(): void {

  }

  login(): void {
    this.auth.login<IFormData>(this.loginValues).subscribe(res => {
      console.log(res);
    })
  }

}
