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
    this.route.params.subscribe( params => console.log(params) );
    console.log(this.user);
  }

  
  updateUser(): void {
    this.userService.updateUser(this.user)
        .subscribe( data => {
          alert("User updated successfully.");
          this.router.navigate(["/users"]);
        });

  };
}
