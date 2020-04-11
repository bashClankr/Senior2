import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


interface test{
  email?:string;
  password?:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:test={}

  constructor(public afAuth :AngularFireAuth,private router: Router) { }

  ngOnInit() {
  }

  async login(){
    await this.afAuth.auth.signInWithEmailAndPassword(
      this.user.email, this.user.password
      
    )
    if(this.afAuth.auth.currentUser){
      this.router.navigateByUrl('/tabs/tab1');
    }else{
      alert("invalid");
    }
  }
}

