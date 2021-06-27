import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ComponentsComponent } from "./components.component";
import { NgbdModalContent } from "./modal/modal.component";
import { TopicDetailComponent } from "./topic-detail/topic-detail.component";
import { LandingPageBannerComponent } from "./landing-page-banner/landing-page-banner.component";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    // NgbModule,
    // NouisliderModule,
    RouterModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,

    NgxSkeletonLoaderModule.forRoot(),

    // JwBootstrapSwitchNg2Module,
  ],
  declarations: [
    // ComponentsComponent,
    // // BasicelementsComponent,
    // // NavigationComponent,
    // // TypographyComponent,
    // // NucleoiconsComponent,
    // // NotificationComponent,
    // // NgbdModalComponent,
    // NgbdModalContent,
    // TopicDetailComponent,
    // LandingPageBannerComponent,
  ],
  entryComponents: [NgbdModalContent],
  exports: [
    ComponentsComponent,
    TopicDetailComponent,
    LandingPageBannerComponent,
  ],
})
export class ComponentsModule {}
