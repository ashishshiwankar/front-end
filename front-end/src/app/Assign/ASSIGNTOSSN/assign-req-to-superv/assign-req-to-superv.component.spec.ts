import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignReqToSupervComponent } from './assign-req-to-superv.component';

describe('AssignReqToSupervComponent', () => {
  let component: AssignReqToSupervComponent;
  let fixture: ComponentFixture<AssignReqToSupervComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignReqToSupervComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignReqToSupervComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
