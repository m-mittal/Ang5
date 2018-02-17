import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';
import {linkItemClass} from "./LinkItem-class";

@Component({
  selector: 'app-ng-book-reedit-exercise',
  templateUrl: './ng-book-reedit-exercise.component.html',
  styleUrls: ['./ng-book-reedit-exercise.component.css']
})

export class NgBookReeditExerciseComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  LinkItemList: linkItemClass[]=[];
  newLinkItem:linkItemClass= new linkItemClass;
  lastIndex: number;
  currentIndex: number;

  constructor() {
    console.log('Parent Class : Constructor');
  }

  ngOnInit() {
    console.log('Parent Class : OnInit');
  }

  ngOnChanges() {
    console.log('Parent Class : OnChanges');
  }

  ngDoCheck() {
    console.log('Parent Class : DoCheck');
  }

  ngAfterContentInit() {
    console.log('Parent Class : AfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Parent Class : AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Parent Class : AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Parent Class : AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Parent Class : OnDestroy');
  }

  public getId():any{
    this.lastIndex = this.LinkItemList.length - 1;
    this.currentIndex = this.lastIndex + 1;
    return this.currentIndex;
  }

  onSubmit(form:any){
    let newLinkItem: linkItemClass= new linkItemClass;
    newLinkItem.voteCount = 0;
    newLinkItem.Title = form.value.titleName;
    newLinkItem.Link = form.value.linkName;
    newLinkItem.id = this.getId();
    this.LinkItemList.push(newLinkItem);

    this.LinkItemList.sort(function (obj1:linkItemClass, obj2:linkItemClass){
      return obj2.voteCount - obj1.voteCount;
    } );

    form.reset();
//    console.log('in onSumbit method');
//    console.log(this.LinkItemList);
  }

  onVoteUp(id:number):void{
    for(let i of this.LinkItemList){
      if(i.id == id ){
        this.LinkItemList[id].voteCount = this.LinkItemList[id].voteCount + 1;
        //      console.log('inside vote up parent');
      }
    }
  }

  onVoteDown(id:number):void{
    for(let i of this.LinkItemList){
      if(i.id == id ){
        this.LinkItemList[id].voteCount = this.LinkItemList[id].voteCount - 1;
//        console.log('inside vote down parent');
      }
    }
  }
}
