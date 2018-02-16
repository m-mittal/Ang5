import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CranBerryPage1ReactiveFormComponent } from './cran-berry-page1-reactive-form.component';

describe('CranBerryPage1ReactiveFormComponent', () => {
  let component: CranBerryPage1ReactiveFormComponent;
  let fixture: ComponentFixture<CranBerryPage1ReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CranBerryPage1ReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CranBerryPage1ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
