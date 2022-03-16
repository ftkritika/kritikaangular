import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  constructor(private http: HttpClient, private title: Title,private router: Router, private route: ActivatedRoute, ) {
  }
  UserForm: FormGroup;


  insertUser = function (user) {
    if (this.UserForm.valid) {
      this.http.post(' https://reqres.in/api/users', user).subscribe((res: Response) => {
        this.router.navigate(['/']);
      });
    }

  };
  ngOnInit() {
    this.UserForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required
      ])),
      firstname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      lastname:new FormControl('', Validators.compose([
        Validators.required
      ])),
      image:new FormControl('', Validators.compose([
        null
      ])),
    });
  }

}
