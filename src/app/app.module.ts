import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ProductComponent } from "./product/product.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { FormsModule } from "@angular/forms";
import { DataService } from "./service/data.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
