import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';
import { ActivatedRoute } from '@angular/router';
import { Personne } from 'src/app/models/Personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
personne:any;
constructor(private cvservice:CvService,private activatedroute:ActivatedRoute)
{
}
ngOnInit(): void {
  this.activatedroute.params.subscribe(
    {
      next:(data)=>
      {
        this.personne=this.cvservice.getPersonnebyid(data['id']);
        console.log(this.personne)
      }
    }
  )
}
}
