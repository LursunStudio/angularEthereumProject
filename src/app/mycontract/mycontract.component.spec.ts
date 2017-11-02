import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycontractComponent } from './mycontract.component';

describe('MycontractComponent', () => {
  let component: MycontractComponent;
  let fixture: ComponentFixture<MycontractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycontractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycontractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
