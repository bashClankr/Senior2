import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';




interface signInt{
  email?:string;
  password?:string;
  name?:string;
  address?:string;
  city?:string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  user:signInt={};

  constructor(
    public afAuth:AngularFireAuth,
    public store:AngularFirestore,
    public router:Router
  ) { }

  ngOnInit() {
  }

 async signup(){
    await this.afAuth.auth.createUserWithEmailAndPassword(this.user.email,this.user.password)
    .then(cred => {
      this.afAuth.auth.currentUser.updateProfile({
        displayName: this.user.name,
        photoURL: ""
      });
      //creates unique user document with their id
      this.store.collection('users').doc(this.afAuth.auth.currentUser.uid).set({
        Name: this.user.name,
        Email: this.user.email,
        City: this.user.city,
        Address: this.user.address
      });
      if(this.afAuth.auth.currentUser){
        this.router.navigateByUrl('/tabs/tab1');
      }
      
    })
    .catch(function(error) {
      console.log(error.message);
      alert(error.message);
    });


  }

}
