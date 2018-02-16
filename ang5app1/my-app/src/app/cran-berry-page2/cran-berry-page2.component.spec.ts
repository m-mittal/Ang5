import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CranBerryPage2Component } from './cran-berry-page2.component';

describe('CranBerryPage2Component', () => {
  let component: CranBerryPage2Component;
  let fixture: ComponentFixture<CranBerryPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CranBerryPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CranBerryPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
