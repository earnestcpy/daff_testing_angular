import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-plan',
  templateUrl: './sales-plan.component.html',
  styleUrls: ['./sales-plan.component.css']
})
export class SalesPlanComponent implements OnInit {

  public functionTypes: any[];
  public planTypes: any[];
  public groupOptions: any[];

  transit: string;
  account: string;

  constructor() { }

  ngOnInit() {
    this.functionTypes = ["functionTypes 1", "functionTypes 2", "functionTypes 3"];
    this.planTypes = ["planType 1", "planType3 2", "planType 3"];
    this.groupOptions = ["groupOption 1", "groupOption 2", "groupOption 3"];
  }

  onSubmit(){
    alert(this)
  }
}

