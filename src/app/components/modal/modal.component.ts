import { Component, Input, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
// <h5 class="modal-title text-center">Modal title</h5>
@Component({
  selector: "app-modal-content",
  templateUrl: "./modal.component.html",
})
export class NgbdModalContent implements OnInit {
  @Input() subTopic;

  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit() {
    console.log("subTopic", this.subTopic);
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
