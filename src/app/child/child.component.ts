import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DataService } from "../service/data.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"],
})
export class ChildComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) {}

  username: string;
  password: string;
  location: string;

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

  @Input() productSelected: boolean = false;
  @Input() selectedProduct: string;
  @Output() addedProduct = new EventEmitter<any>();

  productValue: string;

  onAddProduct() {
    if (this.username == "defualtUser" && this.password == "defualtPassword") {
      alert("You are not logged in");
    } else {
      this.addedProduct.emit(this.selectedProduct);
      this.productValue = this.selectedProduct;
    }
  }
}
