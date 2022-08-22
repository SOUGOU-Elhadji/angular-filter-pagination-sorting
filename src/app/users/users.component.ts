import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Users[] = [];
  firstname!: string;

  key: string = 'id';
  reverse: boolean = false;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(response => {
      this.users = response;
      console.log(response)
    })
  }

  Search(){
    if(this.firstname == ""){
      this.ngOnInit();
    }else{
      this.users = this.users.filter(res => {
        return res.firstname.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
      })
    }
  }

  sort(key: string){
    this.key = key;
    this.reverse = !this.reverse;
  }

  delete(){
    
  }

}
