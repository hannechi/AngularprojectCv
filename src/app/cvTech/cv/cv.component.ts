import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/models/Personne';
import { CvService } from '../services/cv.service';
// import { PremierService } from 'src/app/services/premier.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit{
  personnes: Personne[]=[];
  selectedPersonne : Personne= new Personne();
  constructor(private servicecv : CvService)
  {

  }
  ngOnInit(): void {
    this.personnes = this.servicecv.getPersonnes();
  //   this.personnes = this.servicecv.loaddata();
  //  this.servicecv.affichertablea(this.personnes);
  //  this.servicecv.getdatacontry("Tunisie").subscribe(
  //   (data)=>
  //   {
  //     console.log(data)
  //   },
  //   (err)=>
  //   {
  //     console.log("error"+err)
  //   }
  //  );
  }
  getSelectedPersonne(personne:any)
  {
    this.selectedPersonne=personne;
    console.log(personne)
  }


}
