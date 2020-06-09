import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { DataService } from "../service/data.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private dataService: DataService) {}
  username: string;
  password: string;
  location: string;
  ngOnInit() {
    this.dataService.currentUser.subscribe((dataUser: string) => {
      this.username = dataUser;
    });
    this.dataService.currentPassword.subscribe((dataPassword: string) => {
      this.password = dataPassword;
    });
    this.dataService.currentLocation.subscribe((dataLocation: string) => {
      this.location = dataLocation;
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.router.navigate(["product"]);
    this.dataService.changeUsername(form.value.username);
    this.dataService.changePassword(form.value.password);
    this.dataService.changeLocation(form.value.location);
    //this.dataService.changeMsg(form.value.username);
    /* 
    if (this.username == "test" && this.password == "12345") {
      this.router.navigate(["product"]);
    } else {
      alert("Please use this credentials username: test & password: 12345");
    } */
  }
}
