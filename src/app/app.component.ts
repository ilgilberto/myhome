import { Greeting } from './Greeting';
import { DatabaseService } from './database.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Leggi e contribuisci al libro degli ospiti !';

  mylist : Greeting[];
  private searchField = null;
  clock: String;
  second: String;

  constructor(private rest:DatabaseService) {

     this.getList();
     this.setClock();
  
  }
 
  addGreeting(greeting:Greeting) {

    this.rest.addGreeting(greeting).subscribe(result => {
     if (result == 1)
     {
      this.getList(this.searchField);
     }
     else
     {
       alert("Inserimento non riuscito");
     }
    }); 

  }

  guestBookSearchChange(query:string)
  {
    this.searchField = query;
    this.getList(this.searchField);
  }

  private getList(query?:string)
  {
    this.rest.getGreetings(query)
    .subscribe(result => {
      this.mylist = result;
    });
  }

  private setClock() : void
  {
     
     var days = ["Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato","Domenica"];
     var months = ["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"];
     var now = new Date();
     var dayOfWeek = days[now.getDay()-1];
     var monthName = months[now.getMonth()];
     
    this.clock = dayOfWeek+", "+now.getDate()+" "+monthName+" "
                +this.twoDigit(now.getHours())+":"+this.twoDigit(now.getMinutes());
               
    this.second = this.twoDigit(now.getSeconds());

    setTimeout(()=>{this.setClock()}, 1000);

  }

  private twoDigit(x:Number) : String
  {
    if (x && x<100)
    {
      return x<10 ? "0"+x : ""+x;
    }
    return "00";
  }

}
