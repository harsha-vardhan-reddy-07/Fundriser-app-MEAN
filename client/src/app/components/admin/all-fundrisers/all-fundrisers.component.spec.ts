import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFundrisersComponent } from './all-fundrisers.component';

describe('AllFundrisersComponent', () => {
  let component: AllFundrisersComponent;
  let fixture: ComponentFixture<AllFundrisersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllFundrisersComponent]
    });
    fixture = TestBed.createComponent(AllFundrisersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
