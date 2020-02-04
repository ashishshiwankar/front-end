import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneMappingComponent } from './zone-mapping.component';

describe('ZoneMappingComponent', () => {
  let component: ZoneMappingComponent;
  let fixture: ComponentFixture<ZoneMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
