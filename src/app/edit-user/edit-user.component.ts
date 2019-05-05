import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../models/user';
import { UserService } from '../user/user.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent  {
   private  user: User=new User();
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { 
    
  }

  ngOnInit() {

    this.user.userId = this.route.snapshot.params['userId'];
    this.user.email = this.route.snapshot.params['email'];
    this.user.firstName = this.route.snapshot.params['firstName'];
    this.user.lastName = this.route.snapshot.params['lastName'];
    
    
  }

  
  updateUser(): void {
    this.userService.updateUser(this.user)
        .subscribe( data => {
          alert("User updated successfully.");
          this.router.navigate(["/users"]);
        });

  };
}
