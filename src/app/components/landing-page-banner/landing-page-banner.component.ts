import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-landing-page-banner",
  templateUrl: "./landing-page-banner.component.html",
  styleUrls: ["./landing-page-banner.component.scss"],
})
export class LandingPageBannerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  scrollToTopicSection() {
    const el = document.getElementById("overview");
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }
}
