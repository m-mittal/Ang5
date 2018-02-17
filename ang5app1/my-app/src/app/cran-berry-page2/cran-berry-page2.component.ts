import { Component, OnInit } from '@angular/core';

import {FormControl} from '@angular/forms';

import {tableEntityClass} from './tableEntity.class';
import {GetDataService} from "./get-data.service";
import {Http} from "@angular/http";

@Component({
  selector: 'app-cran-berry-page2',
  templateUrl: './cran-berry-page2.component.html',
  styleUrls: ['./cran-berry-page2.component.css']
})
export class CranBerryPage2Component implements OnInit {
  data: tableEntityClass[];
  currentData; any;
  selectedOptions = [];
  hideShow: Boolean = true;

  constructor(private getDataService: GetDataService, private http: Http) {
    this.data = this.getDataService.getData();
  }

  getData(){
    // this.http.get('https://jsonblob.com/api/jsonBlob/aa92685f-0d95-11e8-8cfd-15871d618ee9').subscribe(res => (this.data = res.json()));
    this.data = this.getDataService.getData();
  }

  ngOnInit() {
    //this.data = this.getDataService.getData();
    // this.getData();
    console.log(this.data);
  }

  onClick(x: any, f: any, data: any) {
    console.log(x.id);
    console.log(f.value);
    console.log(this.data);
    this.currentData = x;
    this.selectedOptions = f.value.dropDown;
    this.hideShow = false;
  }



}
