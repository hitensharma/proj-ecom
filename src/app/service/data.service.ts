import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class DataService {
  private userService = new BehaviorSubject<string>("defualtUser");
  private passwordService = new BehaviorSubject<string>("defualtPassword");
  private locationService = new BehaviorSubject<string>("Default Location");
  //currectnMsg = this.msgService.asObservable();

  currentUser = this.userService.asObservable();
  currentPassword = this.passwordService.asObservable();
  currentLocation = this.locationService.asObservable();
  constructor() {}
  /* 
  changeMsg(msg: string) {
    this.msgService.next(msg);
  } */
  changeUsername(dataUser: string) {
    this.userService.next(dataUser);
  }
  changePassword(dataPassword: string) {
    this.passwordService.next(dataPassword);
  }
  changeLocation(dataLocation: string) {
    this.locationService.next(dataLocation);
  }
}
