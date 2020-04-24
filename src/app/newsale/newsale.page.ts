import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';




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
    public router:Router
    ) { }

  ngOnInit() {
  }

  createSale(){
    var record ={};
    record['title'] = this.sale.name;
    record['description'] = this.sale.description;
    record['endTime'] = this.sale.end;
    record['startTime'] = this.sale.start;



    this.store.collection('sales').add(record).then(docRef => {
      console.log("Document written with ID: ", docRef.id);
      this.store.collection('users').doc(this.afAuth.auth.currentUser.uid).update({SaleID:docRef.id});
      this.router.navigateByUrl("tabs/tab1");

    })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });

  }

}
