import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {linkItemClass} from "./LinkItem-class";
import {isNewline} from "codelyzer/angular/styles/cssLexer";

@Component({
  selector: 'app-ng-book-reedit-exercise',
  templateUrl: './ng-book-reedit-exercise.component.html',
  styleUrls: ['./ng-book-reedit-exercise.component.css']
})
export class NgBookReeditExerciseComponent implements OnInit {

  LinkItemList: linkItemClass[]=[];
  newLinkItem:linkItemClass= new linkItemClass;
  lastIndex: number;
  currentIndex: number;
  constructor() { }

  ngOnInit() {
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

    console.log('in onSumbit method');
    console.log(this.LinkItemList);
  }

  onVoteUp(id:number):void{
    for(let i of this.LinkItemList){
      if(i.id == id ){
        this.LinkItemList[id].voteCount = this.LinkItemList[id].voteCount + 1;
        console.log('inside vote up parent');
      }
    }
  }

  onVoteDown(id:number):void{
    for(let i of this.LinkItemList){
      if(i.id == id ){
        this.LinkItemList[id].voteCount = this.LinkItemList[id].voteCount - 1;
        console.log('inside vote down parent');
      }
    }
  }

}
