import { Component, OnInit } from "@angular/core";
import { NgbPanelChangeEvent } from "@ng-bootstrap/ng-bootstrap";
import { ApiService } from "app/services/api-service/api.service";
import { TopicService } from "app/topic.service";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  topicsList;
  constructor(private topicService: TopicService) {}

  ngOnInit() {
    console.log("ssssssssssssssssss");
    let imgList = [
      "../../../assets//img/Offering.jpg",
      "../../../assets//img/Tabernacle.jpg",
      "../../../assets//img/Dress Of Priest.jpg",

      "../../../assets//img/Ark Of Covenant.jpg",
    ];
    this.topicService.getTopics().subscribe(
      (res) => {
        this.topicsList = res;
        this.topicsList.forEach((topic, i) => {
          console.log("topic", topic);
          topic.img = imgList[i];
        });
        console.log("res", this.topicsList);
      },
      (err) => {
        console.log("err", err);
      }
    );
    // this.apiService.get('')
  }
  downloadNotes(pdfUrl) {
    window.open("http://www.africau.edu/images/default/sample.pdf", "_blank");
    //
  }
  openLink(url) {
    window.open(url, "_blank");
  }
  navigateTo(topic) {
    console.log("topic", topic, topic._id);

    const el = document.getElementById(topic._id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      document.getElementById(topic._id).click();
    }
  }
  handleEvent(t) {
    console.log("t", t);
    t.isClicked = true;
  }
  // public beforeChange($event: NgbPanelChangeEvent) {
  // if ($event.panelId === "preventchange-2") {
  //   $event.preventDefault();
  // }
  // if ($event.panelId === "preventchange-3" && $event.nextState === false) {
  //   $event.preventDefault();
  // }
  // }
}
