import { Component, Input, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
// <h5 class="modal-title text-center">Modal title</h5>
@Component({
  selector: "app-modal-content",
  templateUrl: "./modal.component.html",
})
export class NgbdModalContent implements OnInit {
  @Input() subTopic;

  constructor(
    public activeModal: NgbActiveModal,
    public sanitizer: DomSanitizer
  ) {}
  ngOnInit() {
    // console.log("subTopic", this.subTopic);
    // console.log(
    //   'this.subTopic.youtubeLink.toString().replace("https:", "")',
    //   this.subTopic.youtubeLink.toString().replace("https:", "")
    // );

    if (this.subTopic) {
      console.log("this.subTopic", this.subTopic);

      console.log("this.subTopic.youtubeLink", this.subTopic.youtubeLink);

      if (
        typeof this.subTopic.youtubeLink === "string" &&
        this.subTopic.youtubeLink.includes("https:")
      ) {
        this.subTopic.youtubeLink = this.subTopic.youtubeLink
          .toString()
          .replace("https:", "");
        this.subTopic.youtubeLink =
          this.sanitizer.bypassSecurityTrustResourceUrl(
            this.subTopic.youtubeLink.toString().replace("https:", "")
          );
        console.log("this.subTopic.youtubeLink ", this.subTopic.youtubeLink);
      }
    }
  }
}

// @Component({
//   selector: "app-modal-component",
//   templateUrl: "./modal.component.html",
// })
// export class NgbdModalComponent {
//   constructor(private modalService: NgbModal) {}
//   open() {
//     const modalRef = this.modalService.open(NgbdModalContent, {
//       windowClass: "modal-holder",
//       centered: true,
//     });
//     modalRef.componentInstance.name = "World";
//   }
// }
