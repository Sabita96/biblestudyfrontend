import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";

import { ComponentsModule } from "./components/components.module";
import { ExamplesModule } from "./examples/examples.module";
import { StudyContentComponent } from "./study-content/study-content.component";
import { SliderComponent } from "./shared/slider/slider.component";
import { HttpClientModule } from "@angular/common/http";
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { InViewportModule } from "ng-in-viewport";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    StudyContentComponent,
    SliderComponent,
    ContactPageComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    HttpClientModule,
    InViewportModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
