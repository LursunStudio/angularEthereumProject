import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinContractComponent } from './join-contract.component';

describe('JoinContractComponent', () => {
  let component: JoinContractComponent;
  let fixture: ComponentFixture<JoinContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
