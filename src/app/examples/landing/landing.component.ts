import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
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
  isLoading: boolean = true;
  selectedTopic;

  name = "Angular";
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  isPlay: boolean = false;
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
        this.isLoading = false;
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

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }
  playPause() {
    var myVideo: any = document.getElementById("my_video_1");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }

  makeBig() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 560;
  }

  makeSmall() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 320;
  }

  makeNormal() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 420;
  }

  skip(value) {
    let video: any = document.getElementById("my_video_1");
    video.currentTime += value;
  }

  restart() {
    let video: any = document.getElementById("my_video_1");
    video.currentTime = 0;
  }
}
