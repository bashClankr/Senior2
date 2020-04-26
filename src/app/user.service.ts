import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

// interface user {
//     username: string,
//     uid: string
// }


@Injectable()
export class UserService {
    id;
    exists;
    SaleID;
    imagePath:string="";
    city;
    passport="";
    Add;

    name;
    des;

    constructor(private firestore: AngularFirestore){}

    
    read_Workouts() {
        
            return this.firestore.collection('sales', ref => ref.where('city', '==', this.getCity())).snapshotChanges();
  


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

    getImagePath(){
        return this.SaleID;
    }

    setImagePath(set){
        this.SaleID = set;
    }

    getCity(){
        return this.city;
    }

    setCity(set){
        this.city = set;
    }

    getPassport(){
        return this.passport;
    }

    setPassport(set){
        this.passport = set;
    }
    
    clearPassport(){
        this.passport = "";
    }
    getAdd(){
        return this.Add;
    }

    setAdd(set){
        this.Add = set;
    }


    getName(){
        return this.name;
    }

    setName(set){
        this.name = set;
    }

    getDes(){
        return this.des;
    }

    setDes(set){
        this.des = set;
    }
    
}