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
import { ContactPageComponent } from "./shared/contact-page/contact-page.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { ToastrService } from "ngx-toastr";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { ApiService } from "./services/api-service/api.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  private _router: Subscription;
  @ViewChild(NavbarComponent) navbar: NavbarComponent;
  userAgent;

  footer2;
  @ViewChild("footer", { read: ViewContainerRef, static: true })
  footer: ViewContainerRef;

  contact2;
  @ViewChild("contact", { read: ViewContainerRef, static: true })
  contact: ViewContainerRef;
  mybutton: HTMLElement;
  subscriptionForm: FormGroup;
  showContact = false;
  isHome = false;
  userView = false;
  email;
  // show: boolean;
  // fullScreen: boolean = true;
  // template: string;
  constructor(
    private renderer: Renderer2,
    private router: Router,
    @Inject(DOCUMENT) private document: any,
    private element: ElementRef,
    public location: Location,
    private cfr: ComponentFactoryResolver,
    private toastr: ToastrService,
    private ngxLoaderService: NgxUiLoaderService,
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.subscriptionForm = this.formBuilder.group({
      email: [
        "",
        [
          Validators.required,
          Validators.email,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        ],
      ],
    });
    this.ngxLoaderService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxLoaderService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 300);
    console.log("this.location.path()", this.location.path());

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === "/") {
          this.isHome = true;
          console.log("this.isHome", this.isHome);
        } else this.isHome = false;

        if (event.url.includes("/verifyEmail")) this.userView = false;
        else this.userView = true;

        // if (routerUrl.includes("spiritual-thoughts")) {
        //   this.showContact = false;
        // }
        console.log("this.router.url 1", event.url, this.isHome, this.userView);
      }
    });
    this.mybutton = document.getElementById("back-to-top");
    window.onscroll = () => {
      this.scrollFunction();
    };
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
    { visible, target }: { target: Element; visible: boolean },
    name: string
  ) {
    console.log("visible", visible);

    switch (name) {
      case "app-footer":
        if (this.footer2) {
          return;
        }
        if (visible) {
          this.footer.clear();

          this.footer2 = this.footer.createComponent(
            this.cfr.resolveComponentFactory(FooterComponent)
          );
        }
        break;
      case "app-contact":
        if (this.contact2) {
          return;
        }
        if (visible) {
          this.contact.clear();

          this.contact2 = this.contact.createComponent(
            this.cfr.resolveComponentFactory(ContactPageComponent)
          );
        }
        break;

      default:
        break;
    }
  }
  // When the user scrolls down 20px from the top of the document, show the button

  scrollFunction() {
    // if (
    //   document.body.scrollTop > 20 ||
    //   document.documentElement.scrollTop > 20
    // ) {
    //   this.mybutton.style.display = "block";
    // } else {
    //   this.mybutton.style.display = "none";
    // }
  }

  scrollToTop() {
    window.scroll(0, 0);
  }
  test() {
    this.toastr.success("I'm a toast!", "Success!");
  }
  subscribeEmail() {
    console.log(
      "inside subscribeEmail",
      this.subscriptionForm.get("email").value
    );

    if (this.subscriptionForm.valid) {
      this.ngxLoaderService.start(this.subscriptionForm.get("email").value);
      let payload = {
        email: this.subscriptionForm.get("email").value,
      };
      this.apiService.post("subscriber/subscribeUser", payload).subscribe(
        (res) => {
          console.log("res///////////////", res);
          this.ngxLoaderService.stop(this.subscriptionForm.get("email").value);

          if (res.message === "Email Already Subscribed")
            this.toastr.info("This Email is already subscribed");
          else
            this.toastr.success(
              "Verification Email has been sent to your email id",
              "Success"
            );
          // this.apiService.get
        },
        (err) => {
          console.log("err///////////////", err);
          this.ngxLoaderService.stop(this.subscriptionForm.get("email").value);

          this.toastr.error("Internal Server Error!!");
        }
      );
    }
  }
  // onClickDefault() {
  //   this.show = true;
  //   this.fullScreen = true;
  //   this.template = ``;
  //   setTimeout(() => {
  //     this.show = false;
  //   }, 2000);
  // }
}
