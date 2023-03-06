import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { Users } from './shared-models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-menu-bar';
  users: Users[] = [];
  constructor(private userService: UsersService) {
    this.users = userService.getAll();
  }

  ngOnInit(): void {

  }

}
