import { Component, ElementRef, Input, NgZone, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from "app/components/modal/modal.component";


@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SliderComponent implements OnInit, OnDestroy {


  currentPage: number = 1;
  pagePosition: string = "0%";
  cardsPerPage: number;
  totalPages: number;
  overflowWidth: string;
  cardWidth: string;
  containerWidth: number;
  selectedTopic;

  @Input() subTopics: any;

  @ViewChild("carousel", { static: true, read: ElementRef })
  container: ElementRef;

  private resizeObserver: ResizeObserver;

  constructor(
    private modalService: NgbModal,
    private ngZone: NgZone,
  ) {

  }

  ngOnInit() {
    this.cardsPerPage = this.getCardsPerPage();
    this.initializeSlider();

    this.resizeObserver = new ResizeObserver(() => {
      this.ngZone.run(() => {
        const newCardsPerPage = this.getCardsPerPage();
        if (newCardsPerPage && newCardsPerPage != this.cardsPerPage) {
          this.cardsPerPage = newCardsPerPage;
          this.initializeSlider();
          if (this.currentPage > this.totalPages) {
            this.currentPage = this.totalPages;
            this.populatePagePosition();
          }
        }
      });
    });
    this.resizeObserver.observe(this.container.nativeElement);
  }

  ngOnDestroy() {
    this.resizeObserver?.disconnect();
  }

  initializeSlider() {
    this.totalPages = Math.ceil(this.subTopics.length / this.cardsPerPage);
    this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages *
      10}px)`;
    this.cardWidth = `calc((${100 / this.totalPages}% - ${this.cardsPerPage *
      10}px) / ${this.cardsPerPage})`;
  }

  getCardsPerPage() {
    return Math.floor(this.container.nativeElement.offsetWidth / 300);
  }

  changePage(incrementor) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }

  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${10 *
      (this.currentPage - 1)}px)`;
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
}
