import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

// interface user {
//     username: string,
//     uid: string
// }


@Injectable()
export class UserService {
    id;

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
    
    
}