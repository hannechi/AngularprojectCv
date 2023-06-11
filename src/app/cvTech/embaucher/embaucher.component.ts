import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/models/Personne';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-embaucher',
  templateUrl: './embaucher.component.html',
  styleUrls: ['./embaucher.component.css']
})
export class EmbaucherComponent implements OnInit {
  personnes:Personne[];
  constructor(private embaucheservice : EmbaucheService)
  {
    this.personnes=[]
  }
  ngOnInit(): void {
  this.personnes=this.embaucheservice.getEmbauche();
  }
  debaucher(personne:Personne)
  {
    this.embaucheservice.debaucher(personne);
  }
}
