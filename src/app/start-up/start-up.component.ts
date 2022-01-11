import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-up',
  templateUrl: './start-up.component.html',
  styleUrls: ['./start-up.component.scss']
})
export class StartUpComponent implements OnInit {

  display_client_form:boolean = false;
  display_emp_form:boolean=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onClickButton(input: string){
    if(input=="client"){ 
      this.display_client_form=true;
      this.display_emp_form=false;
      this.router.navigate(['/client-list']);
    }
     
    if(input=="employee"){
      this.display_emp_form=true;
      this.display_client_form=false;
      this.router.navigate(['/employee-list']);
    }
  }

}
