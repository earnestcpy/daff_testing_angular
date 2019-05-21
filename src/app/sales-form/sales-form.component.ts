import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sales-form',
  templateUrl: './sales-form.component.html',
  styleUrls: ['./sales-form.component.css']
})
export class SalesFormComponent implements OnInit {

   salesSetUpForm = new FormGroup({
    transit: new FormControl('hello world'),
    account : new FormControl(''),
    groupID : new FormControl(''),
    planSetUpDate: new FormControl(''),
    planReviewDate: new FormControl(''),
    planFeeStartDate: new FormControl(''),
    reasonForReview: new FormControl('')
    
  });
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.salesSetUpForm.value);
  }

}
