import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';
import {linkItemClass} from "../ng-book-reedit-exercise/LinkItem-class";

@Component({
  selector: 'app-ng-book-reddit-exercise-link-item',
  templateUrl: './ng-book-reddit-exercise-link-item.component.html',
  styleUrls: ['./ng-book-reddit-exercise-link-item.component.css']
})
export class NgBookRedditExerciseLinkItemComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() LinkItem: linkItemClass;
  @Output() onVoteUpEvent = new EventEmitter<number>();
  @Output() onVoteDownEvent = new EventEmitter<number>();

  constructor() {
    console.log('Child Class : Constructor');
  }
  votes: any;
  title: String;
  link: String;
  ngOnInit() {
    this.votes =  this.LinkItem.voteCount;
    this.title =  this.LinkItem.Title;
    this.link =  this.LinkItem.Link;
    console.log('Child Class : OnInit');
  }


  ngOnChanges() {
    console.log('Child Class : OnChanges');
  }

  ngDoCheck() {
    console.log('Child Class : DoCheck');
  }

  ngAfterContentInit() {
    console.log('Child Class : AfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Child Class : AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Child Class : AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Child Class : AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Child Class : OnDestroy');
  }


  onVoteUp(){
    this.votes = this.votes+1;
    this.onVoteUpEvent.emit(this.LinkItem.id);
  }

  onVoteDown(){
  //@HostBinding(this.votes = this.votes- 1);
    this.votes = this.votes-1;
    this.onVoteDownEvent.emit(this.LinkItem.id);
  }

}
