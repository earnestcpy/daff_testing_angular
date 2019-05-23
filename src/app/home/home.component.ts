import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  accountFlag = false;
  productFlag = false;
  nameFlag = false;

  ngOnInit() {}

  onAccountClick() {
    console.log("clicked account");
    this.accountFlag = true;
    this.productFlag = false;
    this.nameFlag = false;
  }

  onProductClick() {
    this.accountFlag = false;
    this.productFlag = true;
    this.nameFlag = false;
  }

  onNameClick() {
    this.accountFlag = false;
    this.productFlag = false;
    this.nameFlag = true;
  }
}
