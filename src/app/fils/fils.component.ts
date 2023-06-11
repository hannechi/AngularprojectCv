import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit{
  
  @Input() titleoffils:any;
  @Output() sendRequesttoparent = new EventEmitter()
  ngOnInit(): void {
    console.log(`property from parent is : ${this.titleoffils}`)
  }
  sendEvent()
  {
    // let value = "hello";
    this.sendRequesttoparent.emit(
      "hello my name is chiheb hannechi"
    );
  }
  
}
