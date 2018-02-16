import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { tableEntityClass} from './tableEntity.class';

@Injectable()
export class GetDataService {

  constructor(private http : Http) {
  }

  data: tableEntityClass[]=[];
  getData():tableEntityClass[]{
    this.http.get('https://jsonblob.com/api/jsonBlob/aa92685f-0d95-11e8-8cfd-15871d618ee9').subscribe(res => (this.data = res.json()));
    return this.data;
  }

}
