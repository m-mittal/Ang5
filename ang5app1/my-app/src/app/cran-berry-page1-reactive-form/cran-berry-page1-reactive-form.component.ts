import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-cran-berry-page1-reactive-form',
  templateUrl: './cran-berry-page1-reactive-form.component.html',
  styleUrls: ['./cran-berry-page1-reactive-form.component.css']
})
export class CranBerryPage1ReactiveFormComponent implements OnInit {

/*  newProduct: FormGroup;
  name: String='';
  email: String='';
  mobile:String='';
  amount:String='';
  city:String='';
  constructor(private formBuilder: FormBuilder) {
    this.newProduct = formBuilder.group({
      name:['n', Validators.required()],
      email:['n', Validators.required()],
      mobile:['n', Validators.required()],
      amount:'n',
      city:'n',
      Form:'n',
      form1 = this.formBuilder.group({
        fromDate:['', Validators.required()],
        toDate:['', Validators.required()]
      }),
      form2 = this.formBuilder.group({
        gender:''
      }),
      form3 = this.formBuilder.group({
        document:''
      })
    });
  }
  */
  ngOnInit() {

  }

}
