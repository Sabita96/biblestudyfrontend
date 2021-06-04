import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { HttpService } from "app/http.service";
import { NgbdModalContent } from "../modal/modal.component";
import {
  trigger,
  transition,
  query,
  style,
  animate,
  group,
} from "@angular/animations";
import { TopicService } from "app/topic.service";

@Component({
  selector: "app-topic-detail",
  templateUrl: "./topic-detail.component.html",
  animations: [
    trigger("slider", [
      transition(
        ":increment",
        group([
          query(":enter", [
            style({
              left: "100%",
            }),
            animate("0.5s ease-out", style("*")),
          ]),
          query(":leave", [
            animate(
              "0.5s ease-out",
              style({
                left: "-100%",
              })
            ),
          ]),
        ])
      ),
      transition(
        ":decrement",
        group([
          query(":enter", [
            style({
              left: "-100%",
            }),
            animate("0.5s ease-out", style("*")),
          ]),
          query(":leave", [
            animate(
              "0.5s ease-out",
              style({
                left: "100%",
              })
            ),
          ]),
        ])
      ),
    ]),
  ],
  styles: [
    `
      .slider-container {
        position: relative;
        height: 400px;
        width: 400px;
        overflow: hidden;
        border: 2px solid;
      }
      .slide {
        position: absolute;
      }
    `,
  ],
})
export class TopicDetailComponent implements OnInit {
  topicsList;

  constructor(
    private modalService: NgbModal,
    private httpService: HttpService,
    private topicService: TopicService
  ) {}

  ngOnInit(): void {
    let isMobile = this.detectMob();
    console.log("isMobile", isMobile);

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
  }

  detectMob() {
    return window.innerWidth <= 800 && window.innerHeight <= 600;
  }
  open() {
    console.log("inside");

    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = "World";
  }
  downloadNotes() {
    // this.httpService
    //   .getPdf("http://www.africau.edu/images/default/sample.pdf")
    //   .subscribe((res) => {
    //     console.log("sssssssssssssssssssss", res);
    //   });
    const link = document.createElement("a");
    link.setAttribute("target", "_blank");
    link.setAttribute(
      "href",
      "http://www.africau.edu/images/default/sample.pdf"
    );
    link.setAttribute("download", `products.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  private _images: string[] = [
    "https://via.placeholder.com/400x400?text=Hello",
    "https://via.placeholder.com/400x400?text=Angular",
    "https://via.placeholder.com/400x400?text=Animations",
  ];
  selectedIndex: number = 0;

  get images() {
    return [this._images[this.selectedIndex]];
  }

  previous() {
    this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
  }

  next() {
    this.selectedIndex = Math.min(
      this.selectedIndex + 1,
      this._images.length - 1
    );
  }
  navigateToVideo() {
    const el = document.getElementById("video-section");
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }
}
