import { Injectable } from '@angular/core';
import { Personne } from '../models/Personne';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PremierService {


  personnes = [
    new Personne(1,"Chiheb","hannechi",23,'3.png',25489788,"student"),
    new Personne(5,"mounir","hannechi",28,'2.png',25483459788,"teacher"),
    new Personne(1,"salma","hannechi",25,'1.png',25489788,"student"),
  ]
  constructor(private http : HttpClient) { }

  affichertablea(data:Personne[])
  {
    data.forEach(element => {
      console.log(element)
    });
  }
  loaddata()
  {
    return this.personnes;
  }

  getdatacontry(contry:string):Observable<any>
  {
  return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${contry}&appid=50a7aa80fa492fa92e874d23ad061374`);
  }

}
