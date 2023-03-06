import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
//esto tengo que quitar talvez
import { Users } from 'src/app/shared-models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
// - - -
// export class Login implements OnInit {
//   users: Users[] = [];
//   constructor(private userService: UsersService, activatedRoute: ActivatedRoute) {
//     activatedRoute.params.subscribe(() => {
//       this.users = UsersService.getAll();
//     })
//   }
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
// }


//esto fue lo que quite y puse lo de arriba - - -


export class LoginComponent implements OnInit {
  msg: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  checkUser(loginRef: NgForm): void {
    // console.log(loginRef);
    let login = loginRef.value;
    // console.log(login);
    //this will check backend
    if (login.userName == "Raj" && login.password == "123") {
      // this.msg = "Successful Login"
    } else if (login.userName == "Rita" && login.password == "321") {
      this.msg = "Successful Login"
    } else {
      this.msg = "Failure try once again"
    }
  }
}


//esto fue lo que quite y puse lo de arriba - - -
