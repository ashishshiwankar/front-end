import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoreOfficerRequestComponent } from './zore-officer-request.component';

describe('ZoreOfficerRequestComponent', () => {
  let component: ZoreOfficerRequestComponent;
  let fixture: ComponentFixture<ZoreOfficerRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoreOfficerRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoreOfficerRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
