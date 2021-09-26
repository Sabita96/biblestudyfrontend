import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { DomSanitizer } from "@angular/platform-browser";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgbdModalContent } from "app/components/modal/modal.component";
import { TopicService } from "app/services/topic-service/topic.service";
import { DownloadService } from "app/services/download-service/download.service";
import { NgxUiLoaderService } from "ngx-ui-loader";
@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {
  topicsList;
  isLoading = true;
  selectedTopic;
  name = "Angular";
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  isPlay = false;
  constructor(
    private topicService: TopicService,
    private downloadService: DownloadService,
    private cd: ChangeDetectorRef,
    public sanitizer: DomSanitizer,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private ngxLoaderService: NgxUiLoaderService
  ) {}

  ngOnInit() {
    console.log("ssssssssssssssssss");

    let imgList = [
      "../../../assets/img/topics/topic8/Trespass Offering.jpg",
      "../../../assets/img/topics/topic7/Sin Offering.jpg",
      "../../../assets/img/topics/topic6/Peace Offering.jpg",
      "../../../assets/img/topics/topic5/Grain Offering 01.jpg",
      "../../../assets/img/topics/topic4/Offering.jpg",
      "../../../assets/img/topics/topic3/Dress Of Priest.jpg",
      "../../../assets/img/topics/topic2/Ark Of Covenant.jpg",

      "../../../assets/img/topics/topic1/Tabernacle.jpg",
    ];
    this.topicService.getTopics().subscribe(
      (res) => {
        this.topicsList = res;
        this.topicsList.forEach((topic, i) => {
          console.log("topic", topic);
          topic.img = imgList[i];
          // if (i == 0) {
          //   topic.isOpen = true;
          // }
        });

        this.isLoading = false;
        this.cd.markForCheck();
        console.log("this.topicsList[0]._id", this.topicsList[0]._id);

        // document.getElementById(this.topicsList[0]._id).click();
        console.log("res", this.topicsList);
      },
      (err) => {
        console.log("err", err);
      }
    );
  }
  watchVideo(subTopic) {
    console.log("url", "subTopic", subTopic.youtubeLink);

    console.log("subTopic", subTopic);
    const modalRef = this.modalService.open(NgbdModalContent, {
      windowClass: "modal-holder",
      centered: true,
      backdrop: true,
      keyboard: false,
      size: "lg",
    });
    modalRef.componentInstance.subTopic = subTopic;
    this.selectedTopic = subTopic;
  }
  downloadNotes(subTopic) {
    this.ngxLoaderService.start(subTopic._id);
    this.downloadService.downloadPdf(subTopic).subscribe(
      (res) => {
        this.ngxLoaderService.stop(subTopic._id);

        this.toastr.info("Please check pdf inside your downloads", "Success", {
          timeOut: 3000,
        });
        let blob = new Blob([res]);
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", subTopic.name + ".pdf");
        document.body.appendChild(link);
        link.click();
      },
      (err) => {
        this.ngxLoaderService.stop(subTopic._id);

        this.toastr.error("Error While downloading pdf!!!", "Server Error"),
          {
            timeOut: 3000,
          };
      }
    );
    // this.externalServicefileLink
    //   .getInvestorAttachments(formID)
    //   .toPromise()
    // //   .then((res: any) => {
    //     if (res.Value.length > 0) {
    //       res.Value.forEach((element) => {
    // this.http
    //   .get(
    //     "http://51.143.20.126:4005/file-upload/files/T3_P41624534484960.pdf",

    //     { responseType: "arraybuffer" }
    //   )
    //   .subscribe((response) => {
    //     console.log("response", response);

    //     // let ext = element.FilePath.split("/");
    //     // let exten = ext[ext.length - 1].split(".");
    //     // console.log(exten);
    //     // let fileName = element.Name + "." + exten[exten.length - 1];
    //     // console.log(fileName);
    //     // console.log("elemnt-----", element);
    //     let blob = new Blob([response]);
    //     // const data = Buffer.from(response.).toString("base64");
    //     const url = window.URL.createObjectURL(blob);
    //     const link = document.createElement("a");
    //     link.href = url;
    //     link.setAttribute("download", subTopic.name + ".pdf");
    //     document.body.appendChild(link);
    //     link.click();
    //   });
    // .catch((err) => {
    //   console.log(err);
    // });
    //     });
    //   } else {
    //     this.toastr.error("Error While downloading pdf!!!");
    //   }
    // })
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
}
