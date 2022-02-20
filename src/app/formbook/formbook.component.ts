import { DatabaseService } from './../database.service';
import { Greeting } from './../Greeting';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'formbook',
  templateUrl: './formbook.component.html',
  styleUrls: ['./formbook.component.css']
})
export class FormbookComponent implements OnInit {
   
  myFormBook : FormGroup;
  maxchartext : number = 150;
  maxcharname : number = 20;
  maxcharemail : number = 30;
  @Output() submit = new EventEmitter<Greeting>();

  constructor( private   fb:    FormBuilder) {
   
    this.resetForm();
   }

  ngOnInit() {
  }

  insert()
  {
     var greeting:Greeting =  {

      name: this.myFormBook.controls["txtNome"].value,
      email: this.myFormBook.controls["txtEmail"].value,
      message: this.myFormBook.controls["txtTesto"].value,
      timestamp: null
     };
  
     this.submit.emit(greeting);
     this.resetForm();
  }

  private resetForm() : void
  {
    var emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    this.myFormBook  = this.fb.group({
      txtNome: ["",[Validators.required,Validators.maxLength(this.maxcharname)]],
      txtEmail:  ["",[Validators.required,Validators.pattern(emailPattern),Validators.maxLength(this.maxcharemail)]],
      txtTesto:   ["",[Validators.required,Validators.maxLength(this.maxchartext)]]
                        });
  }

}
