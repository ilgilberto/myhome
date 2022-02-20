import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Greeting } from 'app/Greeting';
import { Http,RequestOptions,Headers,Response,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DatabaseService {


  constructor(private http: Http) { }


  addGreeting(greeting : Greeting): Observable<Number>
  {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({"headers":headers});
    return this.http.post(this.insertServiceURL,greeting,options).map(this.extractData);
  }

  getGreetings(query:string): Observable<Greeting[]> {
    let params = new URLSearchParams();
    if (query) {params.set('q', query);}
    return this.http
      .get(this.listServiceURL,{"search": params})
      .map((responseData) => responseData.json());
  }

  extractData(res: Response) {
    let body = res.json();
    if (res.status != 200 && res.status != 201)
    {
      alert("Si è verificato un errore nel servizio("+res.status+")");
      return {};
    }
    return body || {};
  }

  get hostName(): string
  {
    return document.location.origin.replace(/:[0-9]+/,"");
  }

  get listServiceURL() : string
  {
    return this.hostName+":"+environment.PORT_SERVICE+environment.LIST_SERVICE_URI;
  }

  get insertServiceURL() : string
  {
    return this.hostName+":"+environment.PORT_SERVICE+environment.INSERT_SERVICE_URI;
  }
}
