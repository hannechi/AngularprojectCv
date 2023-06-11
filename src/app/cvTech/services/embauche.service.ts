import { Injectable } from '@angular/core';
import { Personne } from 'src/app/models/Personne';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  personnes:Personne[]
  constructor() {
    this.personnes=[];
   }
   getEmbauche():Personne[]
   {
    return this.personnes;
   }
  embaucher(personne:Personne):void
  {
    const index = this.personnes.indexOf(personne);
    if(index<0)
    {
    this.personnes.push(personne)
    }
    else
    {
      swal("NO!", `${personne.name} déja embauchée`, "error");
    }
  }
  debaucher(personne:Personne):void
  {
    const index = this.personnes.indexOf(personne);
    if (index>=0)
    {
      this.personnes.splice(index,1);
    }
  }
}
