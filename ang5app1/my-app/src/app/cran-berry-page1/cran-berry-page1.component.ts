import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-cran-berry-page1',
  templateUrl: './cran-berry-page1.component.html',
  styleUrls: ['./cran-berry-page1.component.css']
})
export class CranBerryPage1Component {
  constructor(private http: Http) {
  }
  temp: String = '';
  title = 'app';
  name: String[] = [];
  data: String = '[';
  str: String = '';
  status;
  RadioSelected: Number;
  RadioOne: String = 'none';
  RadioTwo: String = 'none';
  RadioThree: String = 'none';
  onSubmit(form: any): void {
    this.status = form.valid;
    this.name.push(form.value.name1);
    this.temp = JSON.stringify(form.value);
    this.data = this.data.concat(this.temp + ',');
  }


  onSelectionChange(id: Number){
    if(id === 1){
      this.RadioOne = 'block';
      this.RadioTwo = 'none';
      this.RadioThree = 'none';
      this.str = '{"fromDate":form.value.fromDate, "toDate":form.value.toDate}';
    } else if (id === 2){
      this.RadioOne = 'none';
      this.RadioTwo = 'block';
      this.RadioThree = 'none';
    } else if (id === 3){
      this.RadioOne = 'none';
      this.RadioTwo = 'none';
      this.RadioThree = 'block';
    }
    this.RadioSelected = id;
  }

  onSave() {
    console.log('POST');
    this.data = this.data.concat(this.str + ']');
    console.log(this.data);
    const url = `https://hookb.in/EJOO6zlV`;
    this.http.post(url, this.data).subscribe(res => console.log(res.json()));
  }
}
