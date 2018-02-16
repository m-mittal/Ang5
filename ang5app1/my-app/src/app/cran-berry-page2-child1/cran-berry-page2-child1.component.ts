import { Component, OnInit, Input } from '@angular/core';
import {Http} from '@angular/http';
import {tableEntityClass} from "../cran-berry-page2/tableEntity.class";

@Component({
  selector: 'app-cran-berry-page2-child1',
  templateUrl: './cran-berry-page2-child1.component.html',
  styleUrls: ['./cran-berry-page2-child1.component.css']
})
export class CranBerryPage2Child1Component implements OnInit{
  @Input() selectedOptions: any[];
  @Input() data: tableEntityClass[]=[];
  @Input() currentData: number;
  constructor(private http: Http) {
  }

ngOnInit(){
    console.log('in child component OnInit method');
}

 // dataArray: tableEntityClass[] = this.data;
  i:tableEntityClass;
  postData(){
    console.log('post data');
    console.log(this.data);
    //this.http.post('https://requestb.in/vou9lwvo', this.data).subscribe(res => console.log(res.json));

  }

  onSubmit(form:any):void{
    console.log('in onSave mathod : ');
    for(let i of this.data){
      if(i.id == this.currentData){
        console.log(typeof(form.value.name1) )
        this.data[i.id].name = (form.value.name1);
        this.data[i.id].address = (form.value.add1);
        this.data[i.id].mobile = (form.value.mob1);
      }
    }

    this.postData();
  }

}
