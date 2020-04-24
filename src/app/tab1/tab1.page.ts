import { Component,OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';





@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  
  constructor(
    public userService: UserService, 
    public afAuth :AngularFireAuth, 
    public router:Router,
    public store:AngularFirestore
    ) {}

  user1 = this.afAuth.auth.currentUser.displayName;


  



  ngOnInit() {
    if(!this.afAuth.auth.currentUser){
      this.router.navigateByUrl("../login");
    }

    this.store.collection('users').doc(this.afAuth.auth.currentUser.uid).ref.get()
    .then(doc => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        console.log("Sale ID:", doc.get("SaleID"));
        if(doc.get("SaleID") ==""){
          this.userService.setExists(false);
        }else{
          this.userService.setExists(true);
        }
      } else {
        console.log("No such document!");
        this.userService.setExists(false);
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });

 

  }

  newsale(){
    this.router.navigateByUrl("/newsale");
    
  }

  deleteSale(){
    this.store.collection("sales").doc(this.userService.getSaleID()).delete();
    this.store.collection('users').doc(this.afAuth.auth.currentUser.uid).update({SaleID:""});
    this.userService.setExists(false);
    this.ngOnInit();
  }

  addItems(){
    
  }
}
