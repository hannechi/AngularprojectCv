import { Component, Input, OnInit } from '@angular/core';
import { Personne } from 'src/app/models/Personne';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit{

@Input() personne : Personne= new Personne();
constructor(private embacuheservice:EmbaucheService )
{
  
}
ngOnInit(): void {
}
embaucher()
{
  this.embacuheservice.embaucher(this.personne);
}
}
