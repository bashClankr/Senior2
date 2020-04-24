import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

// interface user {
//     username: string,
//     uid: string
// }


@Injectable()
export class UserService {
    id;
    exists=false;
    SaleID;

    constructor(private firestore: AngularFirestore){}

    
    read_Workouts() {
        return this.firestore.collection('sales').snapshotChanges();
    }

    read_Items(docs:string){
        return this.firestore.collection('sales').doc(docs).collection('items').snapshotChanges();
    }

    setId(temp:string){
        this.id=temp;
    }

    getId(){
        return this.id;
    }

    getExists(){
        return this.exists;
    }

    setExists(set){
        this.exists = set;
    }

    getSaleID(){
        return this.SaleID;
    }

    setSaleID(set){
        this.SaleID = set;
    }
    
    
}