import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = 'https://localhost:5001/api/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.baseUrl);
  }
}
