import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { HttpService } from "app/http.service";
import { TopicService } from "app/topic.service";
import { ToastrService } from "ngx-toastr";

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
  constructor(
    private topicService: TopicService,
    private httpService: HttpService,
    private http: HttpClient
  ) {}

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
  downloadNotes1(pdfUrl) {
    window.open(
      "http://51.143.20.126:4000/api/v1/file-upload/files/test_1623516359084.pdf",
      "_blank"
    );
    //
  }

  downloadNotes(formID) {
    // this.externalService
    //   .getInvestorAttachments(formID)
    //   .toPromise()
    // //   .then((res: any) => {
    //     if (res.Value.length > 0) {
    //       res.Value.forEach((element) => {
    this.http
      .get(
        "http://tamilbiblestudybackend.herokuapp.com/file-upload/files/abc1623602821653.pdf",

        { responseType: "arraybuffer" }
      )
      .subscribe((response) => {
        // let ext = element.FilePath.split("/");
        // let exten = ext[ext.length - 1].split(".");
        // console.log(exten);
        // let fileName = element.Name + "." + exten[exten.length - 1];
        // console.log(fileName);
        // console.log("elemnt-----", element);
        let blob = new Blob([response]);
        // const data = Buffer.from(response.).toString("base64");
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "abc.pdf");
        document.body.appendChild(link);
        link.click();
      });
    //     });
    //   } else {
    //     this.toastr.error("Error While downloading pdf!!!");
    //   }
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
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
