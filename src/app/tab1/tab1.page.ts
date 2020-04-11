import { Component,OnInit } from '@angular/core';
import { UserService } from './../user.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  
  tests:any;
  test:string;

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService.read_Workouts().subscribe(data =>{
      this.tests = data.map(e => {
        return{
          id: e.payload.doc.id,
          isEdit: false,
          Description: e.payload.doc.data()['description'],
          EndTime: e.payload.doc.data()['endTime'],
          StartTime: e.payload.doc.data()['startTime'],
          Title: e.payload.doc.data()['title']

        };
      })
      console.log(this.tests);
    });
  }
}
