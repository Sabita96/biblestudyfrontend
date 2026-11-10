import {
  Component,
  OnInit,
  ElementRef,
  ChangeDetectorRef,
} from "@angular/core";
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from "@angular/common";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  private toggleButton: any;
  private sidebarVisible: boolean;
  showThoughts = false;

  constructor(
    public location: Location,
    private element: ElementRef,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    this.sidebarVisible = false;
  }

  ngOnInit() {
    this.showThoughts = false;
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        console.log("this.router.url", this.router.url);
        let routerUrl = this.router.url;
        if (!routerUrl.includes("about-us")) {
          this.showThoughts = true;
          this.cd.markForCheck();
        }
      }
    });
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
  }
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName("html")[0];
    // console.log(html);
    // console.log(toggleButton, 'toggle');

    setTimeout(function () {
      toggleButton.classList.add("toggled");
    }, 500);
    html.classList.add("nav-open");

    this.sidebarVisible = true;
  }
  sidebarClose() {
    const html = document.getElementsByTagName("html")[0];
    // console.log(html);
    this.toggleButton.classList.remove("toggled");
    this.sidebarVisible = false;
    html.classList.remove("nav-open");
  }
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }
  //   isHome() {
  //     var titlee = this.location.prepareExternalUrl(this.location.path());
  //     if (titlee.charAt(0) === "#") {
  //       titlee = titlee.slice(1);
  //     }
  //     if (titlee === "/") {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  isHome() {
    return this.showThoughts;
  }
  isDocumentation() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }
    if (titlee === "/documentation") {
      return true;
    } else {
      return false;
    }
  }

  navigateToContact() {
    const el = document.getElementById("contact-section");
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }

  navigateToThoughts() {
    const el = document.getElementById("thoughts-section");
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }
  navigateToAboutUs() {
    const el = document.getElementById("profile-section");
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }
}
