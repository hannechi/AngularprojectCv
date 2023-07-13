import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-simulator',
  templateUrl: './router-simulator.component.html',
  styleUrls: ['./router-simulator.component.css']
})
export class RouterSimulatorComponent {
  constructor(private router: Router)
  {

  }
  clicktoselectcomposant(value:any)
  {
    const link=[value];
    this.router.navigate(link);
  }
}
