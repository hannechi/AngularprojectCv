import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/models/Personne';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent implements OnInit{

  @Input() personnes: Personne[]=[];
  @Output() sendselectedpersonne = new EventEmitter();
  ngOnInit(): void {
  
  }
  SelectPersonne(personne:any)
  {
    console.log(personne)
    this.sendselectedpersonne.emit(personne);
  }

}
