import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcmcHomeComponent } from './pcmc-home.component';

describe('PcmcHomeComponent', () => {
  let component: PcmcHomeComponent;
  let fixture: ComponentFixture<PcmcHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcmcHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcmcHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
