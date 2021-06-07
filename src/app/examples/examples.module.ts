import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { LandingComponent } from "./landing/landing.component";
import { ProfileComponent } from "./profile/profile.component";
import { SignupComponent } from "./signup/signup.component";
import { RouterModule } from "@angular/router";
import { ComponentsModule } from "app/components/components.module";
import { AppModule } from "app/app.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule,
    ComponentsModule,
  ],
  declarations: [LandingComponent, SignupComponent, ProfileComponent],
})
export class ExamplesModule {}
