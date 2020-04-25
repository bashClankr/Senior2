import { Component,OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  user:string;
  constructor(public afAuth:AngularFireAuth, private router:Router, private location:Location) {
  }
  ngOnInit(){
    if(this.afAuth.auth.currentUser){
      this.user=this.afAuth.auth.currentUser.email
    }else{

    }
  }
  logout(){
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
    this.location.replaceState('/login'); // clears browser history so they can't navigate with back button

  }

  passport(){
    this.router.navigateByUrl('/passport');
  }


}
