import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFundriserComponent } from './update-fundriser.component';

describe('UpdateFundriserComponent', () => {
  let component: UpdateFundriserComponent;
  let fixture: ComponentFixture<UpdateFundriserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateFundriserComponent]
    });
    fixture = TestBed.createComponent(UpdateFundriserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
