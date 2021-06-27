import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";

// import { ComponentsModule } from "./components/components.module";
// import { StudyContentComponent } from "./study-content/study-content.component";
// import { SliderComponent } from "./shared/slider/slider.component";
import { HttpClientModule } from "@angular/common/http";
import { ContactPageComponent } from "./shared/contact-page/contact-page.component";
import { LoaderComponent } from "./shared/loader/loader.component";
import { LandingComponent } from "./components/landing/landing.component";
import { ToastrModule } from "ngx-toastr";
import { ProfileComponent } from "./components/profile/profile.component";
import { LandingPageBannerComponent } from "./components/landing-page-banner/landing-page-banner.component";
import { NgbdModalContent } from "./components/modal/modal.component";
import { TopicDetailComponent } from "./components/topic-detail/topic-detail.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    ProfileComponent,
    // SignupComponent
    // StudyContentComponent,
    // SliderComponent,
    ContactPageComponent,
    LoaderComponent,
    NgbdModalContent,
    TopicDetailComponent,
    LandingPageBannerComponent,
  ],
  imports: [
    NgbModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    // ComponentsModule,
    // ExamplesModule,
    AppRoutingModule,
    HttpClientModule,
    // InViewportModule,
    ToastrModule.forRoot(),
    NgxSkeletonLoaderModule,
    LazyLoadImageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
