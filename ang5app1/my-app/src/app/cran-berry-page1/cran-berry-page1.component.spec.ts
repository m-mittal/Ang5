import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CranBerryPage1Component } from './cran-berry-page1.component';

describe('CranBerryPage1Component', () => {
  let component: CranBerryPage1Component;
  let fixture: ComponentFixture<CranBerryPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CranBerryPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CranBerryPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
