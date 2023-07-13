import { Injectable } from '@angular/core';
import { Personne } from 'src/app/models/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes : Personne[];
  constructor() { 
    this.personnes=[
      new Personne(1,"Chiheb","hannechi",23,'3.png',25489788,"student"),
      new Personne(5,"mounir","hannechi",28,'2.png',25483459788,"teacher"),
      new Personne(6,"salma","mounir",255,'1.png',25489788,"student"),
      new Personne(8,"Chiheb","jhahjza",24,'3.png',25489788,"student"),
      new Personne(9,"hedi","halima",28,'2.png',25483459788,"teacher"),
      new Personne(10,"mounir","khales",25,'1.png',25489788,"student"),

    ]
  }
  getPersonnes():Personne[]
  {
    return this.personnes;
  }
  getPersonnebyid(id: number)
  {
    var personne = this.personnes.find(personne=>{
      return personne.id==id;
    });
    console.log(personne)
    return personne;
  }
}
