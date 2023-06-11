import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbaucherComponent } from './embaucher.component';

describe('EmbaucherComponent', () => {
  let component: EmbaucherComponent;
  let fixture: ComponentFixture<EmbaucherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmbaucherComponent]
    });
    fixture = TestBed.createComponent(EmbaucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
