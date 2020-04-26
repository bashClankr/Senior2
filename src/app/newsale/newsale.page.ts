import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserService } from './../user.service';





interface newsale{
  name?:string;
  start?:string;
  end?:string;
  description?:string;
}

@Component({
  selector: 'app-newsale',
  templateUrl: './newsale.page.html',
  styleUrls: ['./newsale.page.scss'],
})
export class NewsalePage implements OnInit {

  sale:newsale={};

  constructor(
    public store:AngularFirestore,
    public afAuth:AngularFireAuth,
    public router:Router,
    public userService: UserService
    ) { }

  ngOnInit() {
  }

  createSale(){
    var record ={};
    record['title'] = this.sale.name;
    record['description'] = this.sale.description;
    record['endTime'] = this.sale.end;
    record['startTime'] = this.sale.start;
    this.store.collection('users').doc(this.afAuth.auth.currentUser.uid).ref.get().then(e =>{
      console.log(e.data()['City']);
      record['city'] = e.data()['City'];
      record['address'] = e.data()['Address'];



    this.store.collection('sales').add(record).then(docRef => {
      console.log("Document written with ID: ", docRef.id);
      this.store.collection('users').doc(this.afAuth.auth.currentUser.uid).update({SaleID:docRef.id});
      this.userService.setSaleID(docRef.id);


      // this.store.collection('sales').doc(docRef.id).collection('items').doc('item1').set({
      // //when their account is created, it makes an empty document called 'item1' so the collection can exist
      // });
      this.userService.setExists(true);

      this.router.navigateByUrl("tabs/tab1");

    }
    )
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });





    });
    





    
        
      

  } 
}
