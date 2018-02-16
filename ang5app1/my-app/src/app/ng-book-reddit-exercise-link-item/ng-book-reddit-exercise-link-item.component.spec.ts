import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBookRedditExerciseLinkItemComponent } from './ng-book-reddit-exercise-link-item.component';

describe('NgBookRedditExerciseLinkItemComponent', () => {
  let component: NgBookRedditExerciseLinkItemComponent;
  let fixture: ComponentFixture<NgBookRedditExerciseLinkItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBookRedditExerciseLinkItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBookRedditExerciseLinkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
