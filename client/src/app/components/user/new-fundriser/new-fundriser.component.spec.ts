import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFundriserComponent } from './new-fundriser.component';

describe('NewFundriserComponent', () => {
  let component: NewFundriserComponent;
  let fixture: ComponentFixture<NewFundriserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewFundriserComponent]
    });
    fixture = TestBed.createComponent(NewFundriserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
