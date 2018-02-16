import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CranBerryPage2Child1Component } from './cran-berry-page2-child1.component';

describe('CranBerryPage2Child1Component', () => {
  let component: CranBerryPage2Child1Component;
  let fixture: ComponentFixture<CranBerryPage2Child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CranBerryPage2Child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CranBerryPage2Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
