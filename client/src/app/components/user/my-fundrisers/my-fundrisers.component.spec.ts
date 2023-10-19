import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFundrisersComponent } from './my-fundrisers.component';

describe('MyFundrisersComponent', () => {
  let component: MyFundrisersComponent;
  let fixture: ComponentFixture<MyFundrisersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyFundrisersComponent]
    });
    fixture = TestBed.createComponent(MyFundrisersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
