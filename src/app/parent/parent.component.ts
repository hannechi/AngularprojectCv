import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  title ="hello";
  changetitle(text:any)
  {
   this.title= text.value;
  }
  title1="yeeeey tow way";
  processReq(message:any)
  {
    alert(message)
  }
}
