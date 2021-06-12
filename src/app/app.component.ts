import {
  Component,
  OnInit,
  Inject,
  Renderer2,
  ElementRef,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
} from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import "rxjs/add/operator/filter";
import { DOCUMENT } from "@angular/common";
import { LocationStrategy, PlatformLocation, Location } from "@angular/common";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  private _router: Subscription;
  @ViewChild(NavbarComponent) navbar: NavbarComponent;
  userAgent;

  contact2;
  @ViewChild("contact", { read: ViewContainerRef, static: true })
  contact: ViewContainerRef;
  constructor(
    private renderer: Renderer2,
    private router: Router,
    @Inject(DOCUMENT) private document: any,
    private element: ElementRef,
    public location: Location,
    private cfr: ComponentFactoryResolver
  ) {}
  ngOnInit() {
    var navbar: HTMLElement =
      this.element.nativeElement.children[0].children[0];
    this._router = this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        if (window.outerWidth > 991) {
          window.document.children[0].scrollTop = 0;
        } else {
          window.document.activeElement.scrollTop = 0;
        }
        this.navbar.sidebarClose();
      });
    // this.renderer.listen('window', 'scroll', (event) => {
    //     const number = window.scrollY;
    //     if (number > 150 || window.pageYOffset > 150) {
    //         // add logic
    //         navbar.classList.remove('navbar-transparent');
    //     } else {
    //         // remove logic
    //         navbar.classList.add('navbar-transparent');
    //     }
    // });
    var ua = window.navigator.userAgent;
    var trident = ua.indexOf("Trident/");
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf("rv:");
      var version = parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
    }
    if (version) {
      var body = document.getElementsByTagName("body")[0];
      body.classList.add("ie-background");
    }
  }
  removeFooter() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice(1);
    if (titlee === "signup" || titlee === "nucleoicons") {
      return false;
    } else {
      return true;
    }
  }

  async loadComponent(
    { visible }: { target: Element; visible: boolean },
    name: string
  ) {
    switch (name) {
      case "contact-page":
        if (this.contact2) {
          return;
        }
        if (visible || this.userAgent === "Prerender") {
          //   const { ContactPageComponent } = await import(
          //     "./contact-page/contact-page.component"
          //   );
          this.contact.clear();
          this.contact2 = this.contact.createComponent(
            this.cfr.resolveComponentFactory(ContactPageComponent)
          );
          //   this.updateScrollData();
        }
        break;

      default:
        break;
    }
  }
}
