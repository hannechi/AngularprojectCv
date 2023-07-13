import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit{
  color="red"
  ngOnInit(): void {
    this.activatedroute.params.subscribe(
      {
        next: data=>
        {
          console.log(data)
          this.color=data['default']
        },
        error:error=>
        {
          console.log(error)
        }
    }
    )
  }
  constructor(private router: Router,private activatedroute: ActivatedRoute)
  {

  }
  GotoCv()
  {
    const link=['cv'];
    this.router.navigate(link);
  }
}
