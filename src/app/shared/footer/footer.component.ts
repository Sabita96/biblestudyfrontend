import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  test: Date = new Date();
  mybutton;
  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        console.log("this.router.url", this.router.url);
      }
    });
  }

  ngOnInit() {
    this.mybutton = document.getElementById("back-to-top");
    window.onscroll = () => {
      this.scrollFunction();
    };
  } //Get the button

  // When the user scrolls down 20px from the top of the document, show the button

  scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      this.mybutton.style.display = "block";
    } else {
      this.mybutton.style.display = "none";
    }
  }
}
