import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettleOrRecordComponent } from './settle-or-record.component';

describe('SettleOrRecordComponent', () => {
  let component: SettleOrRecordComponent;
  let fixture: ComponentFixture<SettleOrRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettleOrRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettleOrRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
