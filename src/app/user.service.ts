import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

// interface user {
//     username: string,
//     uid: string
// }

@Injectable()
export class UserService {
    //private user: user; 

    constructor(private firestore: AngularFirestore){}

    
    read_Workouts() {
    return this.firestore.collection('sales').snapshotChanges();
    }
    
    
}