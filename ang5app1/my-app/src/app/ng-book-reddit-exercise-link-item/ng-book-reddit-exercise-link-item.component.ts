import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {linkItemClass} from "../ng-book-reedit-exercise/LinkItem-class";

@Component({
  selector: 'app-ng-book-reddit-exercise-link-item',
  templateUrl: './ng-book-reddit-exercise-link-item.component.html',
  styleUrls: ['./ng-book-reddit-exercise-link-item.component.css']
})
export class NgBookRedditExerciseLinkItemComponent implements OnInit {
  @Input() LinkItem: linkItemClass;
  @Output() onVoteUpEvent = new EventEmitter<number>();
  @Output() onVoteDownEvent = new EventEmitter<number>();
  constructor() { }
  votes: any;
  title: String;
  link: String;
  ngOnInit() {
    this.votes =  this.LinkItem.voteCount;
    this.title =  this.LinkItem.Title;
    this.link =  this.LinkItem.Link;

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
