import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../service/data.service";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.scss"],
})
export class ParentComponent implements OnInit {
  constructor(private dataService: DataService) {}

  proSelected: boolean = false;
  selProduct: string;
  addedProduct: any;

  username: string;
  password: string;
  location: string;

  countTshirt = Math.min(0, 1000);
  countShirt = Math.min(0, 1000);
  countTrouser = Math.min(0, 1000);

  tshirt = [];
  shirt = [];
  trouser = [];

  ngOnInit() {
    this.dataService.currentUser.subscribe((data: string) => {
      this.username = data;
    });
    this.dataService.currentPassword.subscribe((data: string) => {
      this.password = data;
    });
    this.dataService.currentLocation.subscribe((data: string) => {
      this.location = data;
    });
  }
  /* 
  onAdd() {
    this.count = this.count + 1;
  }

  onRemove() {
    this.count = this.count - 1;
  } */

  onAddTshirt() {
    this.tshirt.push();
    this.countTshirt = this.countTshirt + 1;
  }

  onAddShirt() {
    this.shirt.push();
    this.countShirt = this.countShirt + 1;
  }

  onAddTrouser() {
    this.trouser.push();
    this.countTrouser = this.countTrouser + 1;
  }

  onRemoveTrouser(item) {
    this.countTrouser = this.countTrouser - 1;
    if (this.countTrouser < 1) {
      //this.countTrouser = this.countTrouser - 1;
      this.trouser.splice(item, 1);
      this.countTrouser = 0;
    }
  }

  onRemoveShirt(item) {
    this.countShirt = this.countShirt - 1;
    if (this.countShirt < 1) {
      //this.countShirt = this.countShirt - 1;
      this.shirt.splice(item, 1);
      this.countShirt = 0;
    }
  }
  onRemoveTshirt(item) {
    this.countTshirt = this.countTshirt - 1;
    if (this.countTshirt < 1) {
      //this.countTshirt = this.countTshirt - 1;
      this.tshirt.splice(item, 1);
      this.countTshirt = 0;
    }
  }

  onDeleteTshirt(item) {
    this.tshirt.splice(item, 1);
    this.countTshirt = 0;
  }
  onDeleteShirt(item) {
    this.shirt.splice(item, 1);
    this.countShirt = 0;
  }
  onDeleteTrouser(item) {
    this.trouser.splice(item, 1);
    this.countTrouser = 0;
  }

  onSelectProduct(product) {
    this.proSelected = true;
    this.selProduct = product;
  }
  onAddedProduct(proData) {
    this.addedProduct = proData;
    //this.trouser.push(proData);
    //this.count = this.count + 1;
    if (this.addedProduct === "trouser") {
      this.trouser.push(proData);
      this.countTrouser = this.countTrouser + 1;
    } else if (this.addedProduct === "tshirt") {
      this.tshirt.push(proData);
      this.countTshirt = this.countTshirt + 1;
    } else if (this.addedProduct === "shirt") {
      this.shirt.push(proData);
      this.countShirt = this.countShirt + 1;
    }
  }
  checkout() {
    console.log("USERNAME:", this.username);
    console.log("PASSWORD:", this.password);
    console.log("TSHIRT IN CART:", this.countTshirt);
    console.log("SHIRT IN CART:", this.countShirt);
    console.log("TROUSER IN CART:", this.countTrouser);
  }
}
