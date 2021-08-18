import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TopicService } from "../services/topic-service/topic.service";
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: "app-email-verification",
  templateUrl: "./email-verification.component.html",
  styleUrls: ["./email-verification.component.css"],
})
export class EmailVerificationComponent implements OnInit {
  isVerified = false;
  loading = true;
  constructor(
    private topicService: TopicService,
    private route: ActivatedRoute,
    private ngxLoaderService: NgxUiLoaderService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log("inside", this.route.snapshot.queryParams.email);
    let email = this.route.snapshot.queryParams.email;
    this.ngxLoaderService.start();

    this.topicService.subscribeUser(email).subscribe(
      (res) => {
        console.log("res", res);
        if (res.message === "User Found") {
          console.log("sssssssssssssssssssssssssss");

          this.isVerified = true;
        }
        this.loading = false;

        this.cd.markForCheck();
        // this.ngxLoaderService.stop();
      },
      (err) => {
        console.log("err", err);
        this.loading = false;

        this.isVerified = false;

        // this.ngxLoaderService.stop();
      }
    );
  }
}
