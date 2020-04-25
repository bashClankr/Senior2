import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { url } from 'inspector';
import { async } from '@angular/core/testing';
import { resolve } from 'url';




@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  items:any;
  pic:string;

  constructor(public userService: UserService,private router: Router) { }

   ngOnInit() {
    console.log(this.userService.getId());
    this.userService.read_Items(this.userService.id).subscribe( data =>{
       this.items =  data.map(  e => {
         return{
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['name'],
          Picture:  e.payload.doc.data()['picture'],
          Qty: e.payload.doc.data()['qty']
        };


      })
    });
  }

  goBack(){
    this.router.navigateByUrl('/tabs/tab2');
  }


}
