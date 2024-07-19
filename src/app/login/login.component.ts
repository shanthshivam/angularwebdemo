import { Component, inject } from '@angular/core';
import { LoginService } from '../login.service';
import {ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import {User} from '../user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

// This is the component file for login.html from SpringBootMysql application

@Component({
  // name of the component to refer in html files. we use the tag <app-login>
  selector: 'app-login',
  standalone: true,
  // I am using reactive forms from angular to automate form handling. This has 
  // feature like validation and error handling. 
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // initialise the User instance here
  user!:User;
  
  // the router is initialised here
  constructor(private router: Router) {
    
  }

  // create a form instance and put the form elements you want to track
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  
  // create and instance through dependancy injection
  // this is like UserRepository interface in SpringBoot
  loginService:LoginService = inject(LoginService);

  // This method will be called when the form is submitted
  // It calls the loginService and its method login() with parameters.
  // it return User instance from the API 
  handleSubmit(){
    let nameInput = this.profileForm.value.name as string;
    let emailInput = this.profileForm.value.email as string;
    
    this.loginService.login(nameInput,emailInput).subscribe( user => {
        this.user = user;
        console.log('logged in use ' + user);
      }
    );
    // handover control to the next page(component). Routes mentioned in app.route.ts
    // are controlled here. I am also passing variable name and email to the next
    // home component(it is the userdetails.html page from SpringBootMySql application)
    this.router.navigate(['/home', {name: nameInput, email: emailInput}]);    
  }
  
}
