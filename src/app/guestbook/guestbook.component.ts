import { URLSearchParams } from '@angular/http';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Greeting } from 'app/Greeting';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.css']
})
export class GuestbookComponent implements OnInit {

  searchForm : FormGroup;
  private filterEmpty = true;

  @Output() changed = new EventEmitter<String>();
 
  @Input() greetings:Greeting[];

  constructor( private   fb:    FormBuilder) {

    this.searchForm  = this.fb.group({txtMessage: [""]});

    this.searchForm.valueChanges.subscribe(value => {
      
      if(value.txtMessage && new String(value.txtMessage).length>0)
      {this.filterEmpty = false;}
      else
      {this.filterEmpty = true;}

      this.changed.emit(value.txtMessage);
});

   }

  ngOnInit() {
  }

  get nonCiSonoSaluti()
  {
    return (!this.greetings || this.greetings == null || this.greetings.length==0) &&
            this.filterEmpty;
  }

}
