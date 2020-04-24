import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from './../user.service';





interface newItem{
  name?:string;
  picture?:string;
  qty?:string;
}

@Component({
  selector: 'app-additems',
  templateUrl: './additems.page.html',
  styleUrls: ['./additems.page.scss'],
})
export class AdditemsPage implements OnInit {

  item:newItem={};


  constructor(
    public store:AngularFirestore,
    public afAuth :AngularFireAuth, 
    public userService: UserService, 



  ) { }

  ngOnInit() {
  }

  createItem(){
        var record ={};
        record['name'] = this.item.name;
        record['picture'] = this.item.picture;
        record['qty'] = this.item.qty;


        this.store.collection('sales').doc(this.userService.getSaleID()).collection('items').add(record)
      .catch(function(error) {
          console.error("Error adding item: ", error);
      });

      this.store.collection('sales').doc(this.userService.getSaleID()).collection('items').doc('item1').ref.get().
      then(doc => {
        if(doc.exists){
          this.store.collection('sales').doc(this.userService.getSaleID()).collection('items').doc('item1').delete();
        }else{
          console.log("already has items");
        }

        
      }).catch(function(error) {
        console.log("Error removing placeholder:", error);
      });

  }

}


