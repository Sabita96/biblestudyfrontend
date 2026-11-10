import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  imagesSubject = new Subject();
  sortTypeSubject = new BehaviorSubject("hightolow");

  images$ = this.imagesSubject.asObservable();
  images: Array<string> = [];
  allImages: Array<any> = [];
  sortType = "hightolow";
  constructor() {
    this.sortTypeSubject.subscribe((filter) => {
      console.log("aaaaaaaaaaaaaaaaaaaaa", filter);

      this.sortType = filter;
      this.images = [];

      this.getNextItems();
      this.imagesSubject.next(this.images);
    });
  }

  loadMore(): void {
    if (this.getNextItems()) {
      this.imagesSubject.next(this.images);
    }
  }

  getNextItems(): boolean {
    console.log("filter");

    if (this.images.length >= this.allImages.length) {
      return false;
    }
    console.log("this.allImages", this.allImages);
    // this.allImages = this.getSortedimages()
    const remainingLength = Math.min(
      15,
      this.allImages.length - this.images.length
    );
    this.images.push(
      ...this.allImages.slice(
        this.images.length,
        this.images.length + remainingLength
      )
    );
    console.log("this.images", this.images);

    return true;
  }
}
