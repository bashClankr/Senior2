import { Component,OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  
  tests:any;
  test:string;

  constructor(public userService: UserService, public afAuth :AngularFireAuth) {}

  ngOnInit() {
    
  }
}
