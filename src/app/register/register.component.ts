import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public regValues: { username: string; password: string; } = {
    username: "",
    password: ""
  }

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.auth.registerNewUser(this.regValues).subscribe(res => {
      console.log(res);
    });
  }

}
