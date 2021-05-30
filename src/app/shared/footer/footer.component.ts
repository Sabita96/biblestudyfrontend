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

  constructor(private router: Router) {
    this.router.events.subscribe(
        (event: any) => {
          if (event instanceof NavigationEnd) {
            console.log('this.router.url', this.router.url);
          }
        }
      );
  }

  ngOnInit() {}
}
