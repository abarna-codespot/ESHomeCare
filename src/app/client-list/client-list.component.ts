import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface TableData {
  empName:string,
  type:string,
  schedule:string,
  phone:string,
  email:string,
  medical:string,
  dob:string,
  status:string,
  coordinator:string
  
}


const ELEMENT_DATA: TableData[] = [
  {empName:'John Doe',type:'Full-Time',schedule:'',phone:'',email:'',medical:'',dob:'',status:'',coordinator:''},
  {empName:'Rose',type:'Part-Time',schedule:'',phone:'',email:'',medical:'',dob:'',status:'',coordinator:''},
  {empName:'Angela',type:'Contract',schedule:'',phone:'',email:'',medical:'',dob:'',status:'',coordinator:''},
  {empName:'Frank',type:'Part-Time',schedule:'',phone:'',email:'',medical:'',dob:'',status:'',coordinator:''},
  {empName:'Chandler',type:'Part-Time',schedule:'',phone:'',email:'',medical:'',dob:'',status:'',coordinator:''},
  {empName:'Joe',type:'FContract',schedule:'',phone:'',email:'',medical:'',dob:'',status:'',coordinator:''},
  {empName:'Rachel',type:'Full-Time',schedule:'',phone:'',email:'',medical:'',dob:'',status:'',coordinator:''},
  {empName:'Monica',type:'Contract',schedule:'',phone:'',email:'',medical:'',dob:'',status:'',coordinator:''}, 
  {empName:'Ross',type:'Full-Time',schedule:'',phone:'',email:'',medical:'',dob:'',status:'',coordinator:''}
];

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  displayedColumns: string[] = ['empName','type','schedule','phone','email','medical','dob','status','coordinator'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<TableData>();

  constructor(private router:Router) { }


  ngOnInit(): void {
  }
  onClickCreateClient(){
    this.router.navigate(['/create-client'])
  }
}
