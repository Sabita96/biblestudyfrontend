import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
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
  revTopic;
  name = "Angular";
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  isPlay = false;
  //

  arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  totalCards: number = 30;
  currentPage: number = 1;
  pagePosition: string = "0%";
  cardsPerPage: number;
  
  totalPages: number;
  overflowWidth: string;
  cardWidth: string;
  containerWidth: number;
  //
  constructor(
    private topicService: TopicService,
    private downloadService: DownloadService,
    private cd: ChangeDetectorRef,
    public sanitizer: DomSanitizer,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private ngxLoaderService: NgxUiLoaderService
  ) {
    
  }
  @ViewChild("carousel", { static: true, read: ElementRef })
  container: ElementRef;
  @HostListener("window:resize") windowResize() {
    let newCardsPerPage = this.getCardsPerPage();
    if (newCardsPerPage != this.cardsPerPage) {
      this.cardsPerPage = newCardsPerPage;
      this.initializeSlider();
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
        this.populatePagePosition();
      }
    }
  }
  ngOnInit() {
    //
    this.cardsPerPage = this.getCardsPerPage();
    this.initializeSlider();
    //
    console.log("ssssssssssssssssss");

    let imgList = [
      "../../../assets/img/topics/topic9/Tribes.jpg",
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
        this.topicsList = res.filter((ele: any) => {
          if (ele.name.includes("Revelation")) this.revTopic = ele;
          return !ele.name.includes("Revelation");
        });
        // console.log("dddddddddd", this.revTopic);

        this.topicsList.forEach((topic, i) => {
          console.log("topic", topic);
          topic.img = imgList[i];
          // if (i == 0) {
          //   topic.isOpen = true;
          // }
        });
        // console.log("this.topicsList", this.topicsList);

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
  downloadNotes(subTopic, url) {
    // this.ngxLoaderService.start(subTopic._id);
    window.open(url, '_blank');
    // this.downloadService.downloadPdf(url).subscribe(
    //   (res) => {
    //     this.ngxLoaderService.stop(subTopic._id);

    //     this.toastr.info("Please check pdf inside your downloads", "Success", {
    //       timeOut: 3000,
    //     });
    //     let blob = new Blob([res]);
    //     const url = window.URL.createObjectURL(blob);
    //     const link = document.createElement("a");
    //     link.href = url;
    //     link.setAttribute("download", subTopic.name + ".pdf");
    //     document.body.appendChild(link);
    //     link.click();
    //   },
    //   (err) => {
    //     this.ngxLoaderService.stop(subTopic._id);

    //     this.toastr.error("Error While downloading pdf!!!", "Error"),
    //       {
    //         timeOut: 3000,
    //       };
    //   }
    // );
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
  initializeSlider() {
    this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
    this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages *
      10}px)`;
    this.cardWidth = `calc((${100 / this.totalPages}% - ${this.cardsPerPage *
      10}px) / ${this.cardsPerPage})`;
  }

  getCardsPerPage() {
    return 3;
    // return Math.floor(this.container.nativeElement.offsetWidth / 200);
  }

  changePage(incrementor) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }

  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${10 *
      (this.currentPage - 1)}px)`;
  }
}
