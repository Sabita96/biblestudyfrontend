import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { ComponentsComponent } from "./components/components.component";
import { LandingComponent } from "./components/landing/landing.component";
import { TopicDetailComponent } from "./components/topic-detail/topic-detail.component";
import { ProfileComponent } from "./components/profile/profile.component";

const routes: Routes = [
  { path: "home1", component: ComponentsComponent },
  { path: "about-us", component: ProfileComponent },
  // { path: "signup", component: SignupComponent },
  { path: "", component: LandingComponent },
  { path: "topic-detail/:id", component: TopicDetailComponent },
  { path: "**", redirectTo: "" },
  // { path: "nucleoicons", component: NucleoiconsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
