import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personne } from 'src/app/models/Personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent {
  @Input() personne:Personne=new Personne();
  @Output() selectedpersonne = new EventEmitter();

  SelectPersonne()
  {
    this.selectedpersonne.emit(this.personne)
  }
}
