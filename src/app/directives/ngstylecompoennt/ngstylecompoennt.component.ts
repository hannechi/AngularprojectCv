import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ngstylecompoennt',
  templateUrl: './ngstylecompoennt.component.html',
  styleUrls: ['./ngstylecompoennt.component.css']
})
export class NgstylecompoenntComponent {
  @Input() bgcolor="yellow";
  @Input() fonttaille ="65px";

  changesize(text :any)
  {
      this.fonttaille=text.value+"px";
  }
}
