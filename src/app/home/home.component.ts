import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// this component refers to userdetails.html in the SpringBootMySql app
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // local variables of the name and email coming from login action
  name:string ='';
  email:string = '';

  // the ActivatedRoute helps capturing the 
  // parameters(name and email) sent by the caller component. 
  // "     this.router.navigate(['/home', {name: nameInput, email: emailInput}]); "
  // the code above is from login.component.ts
  
  constructor(private route: ActivatedRoute) {}

  // on initialisation of the component upon refered to this by logincomponent
  // the parameter values are captured and set locally.
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name') as string;
      this.email = params.get('email') as string;

    });
  }

}
