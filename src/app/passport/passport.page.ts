import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


interface passport{
  city?:string;

}


@Component({
  selector: 'app-passport',
  templateUrl: './passport.page.html',
  styleUrls: ['./passport.page.scss'],
})
export class PassportPage implements OnInit {

  pass:passport={};
  items:any;

  constructor(
    public userService: UserService, 
    private router: Router,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.firestore.collection('sales', ref => ref.where('city', '==', this.userService.getPassport())).snapshotChanges().subscribe(data =>{
      this.items = data.map(e => {
        return{
          id: e.payload.doc.id,
          isEdit: false,
          Description: e.payload.doc.data()['description'],
          EndTime: new Date(e.payload.doc.data()['endTime']).toLocaleString(),
          StartTime: new Date(e.payload.doc.data()['startTime']).toLocaleString(),
          Title: e.payload.doc.data()['title']

        };
      })
    });
    console.log(this.items);
  }

  fly(){
    this.userService.setPassport(this.pass.city);
    this.ngOnInit();
    this.router.navigateByUrl('/passport');
  }
  itemsN(id:string){
    this.userService.setId(id);
    this.router.navigateByUrl('/items');
  }

  goHome(){
    this.userService.setPassport("");
    this.router.navigateByUrl('/tabs/tab3');
  }

}
