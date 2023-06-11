import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstylecompoenntComponent } from './ngstylecompoennt.component';

describe('NgstylecompoenntComponent', () => {
  let component: NgstylecompoenntComponent;
  let fixture: ComponentFixture<NgstylecompoenntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgstylecompoenntComponent]
    });
    fixture = TestBed.createComponent(NgstylecompoenntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
