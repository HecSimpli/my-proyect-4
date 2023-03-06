import { Injectable } from '@angular/core';
import { sample_users } from 'src/data';
import { Users } from '../shared-models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getAll(): Users[] {
    return sample_users;
  }
}
