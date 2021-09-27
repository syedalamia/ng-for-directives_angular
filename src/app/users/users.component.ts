import { user } from './../../models/user';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : user[]= [];

  constructor() {
    this.users=[{
      firstName : "lamia",
      secondName : "sadia",
  
      address : {
          road : 5,
          city : "Dhaka"
      }
  },
  {
    firstName : "Samia",
    secondName : "Nadia",

    address : {
        road : 7,
        city : "Dhaka"
    }
}, {
  firstName : "namia",
  secondName : "dia",

  address : {
      road : 8,
      city : "Dhaka"
  }
}]
   }

  ngOnInit(): void {
    

  }

}
