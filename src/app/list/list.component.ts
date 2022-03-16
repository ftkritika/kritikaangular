import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private http: HttpClient, private title: Title) {
  }
  users;
  name:any;
  alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
    'o','p','q','r','s','t','u','v','w','x','y','z'];

  ngOnInit() {
    this.http.get('https://reqres.in/api/users').subscribe(data => {
      let users = data;
      this.users=users['data'];

    });
  }
  compareChar(event,property){
    return this.users.name.toLowerCase().startsWith(event.toLowerCase());

  }

  delete = function (id) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.users.splice(id, 1);
      this.http.delete('https://reqres.in/api/users' + id).subscribe(data => {
        console.log(data);
      });
    }
  };
}
