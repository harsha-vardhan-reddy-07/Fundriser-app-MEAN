import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundriserDetailsComponent } from './fundriser-details.component';

describe('FundriserDetailsComponent', () => {
  let component: FundriserDetailsComponent;
  let fixture: ComponentFixture<FundriserDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundriserDetailsComponent]
    });
    fixture = TestBed.createComponent(FundriserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
