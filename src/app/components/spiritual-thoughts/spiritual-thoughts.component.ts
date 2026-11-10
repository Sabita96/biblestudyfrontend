import { Component, OnInit, ChangeDetectionStrategy, HostListener } from "@angular/core";

interface GalleryLanguage {
  id: string;
  label: string;
  folder: string;
  images: string[];
}

@Component({
    selector: "app-spiritual-thoughts",
    templateUrl: "./spiritual-thoughts.component.html",
    styleUrls: ["./spiritual-thoughts.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SpiritualThoughtsComponent implements OnInit {
  languages: GalleryLanguage[] = [
    {
      id: "eng",
      label: "English",
      folder: "eng",
      images: [
        "Church Success EN.jpg",
        "Cross EN.jpg",
        "Deva vasanam 01.jpg",
        "Devasamugam.jpg",
        "Eluputhal 01 EN.jpg",
        "Eribavan EN.jpg",
        "Gods Presence EN.jpg",
        "Grace EN.jpg",
        "Holiness EN.jpg",
        "Holy EN.jpg",
        "Holy Life EN.jpg",
        "Humble EN1.jpg",
        "Jebam EN.jpg",
        "Jebam ENG.jpg",
        "Love EN.jpg",
        "Mind EN.jpg",
        "Ministry EN.jpg",
        "Parisutham Eng.jpg",
        "Prayer Faith EN.jpg",
        "prayer sport 02.jpg",
        "prayer sprout.jpg",
        "Run E.jpg",
        "Seek EN.jpg",
        "Sign ENl.jpg",
        "Soulburden EN.jpg",
        "Sp Maturity EN.jpg",
        "Spritual Life EN.jpg",
        "Thalmai EN.jpg",
        "Vasanam EN.jpg",
      ],
    },
    {
      id: "tamil",
      label: "Tamil",
      folder: "tamil",
      images: [
        "Church Success TN.jpg",
        "Arathanai TN.jpg",
        "Cross TN.jpg",
        "Deva vasanam.jpg",
        "Devasamugaml.jpg",
        "Eluputhal 01 TN.jpg",
        "Eribavan TN.jpg",
        "Gods Presence TN.jpg",
        "Grace TN.jpg",
        "Holiness TN.jpg",
        "Holy Life TN.jpg",
        "Holy TN.jpg",
        "Humble TN1.jpg",
        "Instagram 01.jpg",
        "Jebam Tl.jpg",
        "Jebam TN.jpg",
        "Jebam.jpg",
        "Jebathulir 01.jpg",
        "Jebathulir 02.jpg",
        "Jebathulir tamil.jpg",
        "Jebathulir.jpg",
        "Love TN.jpg",
        "Mind TN.jpg",
        "Ministry TN.jpg",
        "Parisutham.jpg",
        "Prayer Faith TN.jpg",
        "Run T.jpg",
        "Seek TN.jpg",
        "Sign TNl.jpg",
        "Soulburden TN.jpg",
        "Sp Maturity TN.jpg",
        "Spritual Life TN.jpg",
        "Thalmai TN.jpg",
        "Unartum Unmaigal 01.jpg",
        "Vasanam TN.jpg",
      ],
    },
    {
      id: "hindi",
      label: "Hindi",
      folder: "hindi",
      images: [
        "Church Success HN.jpg",
        "Arathanai HN.jpg",
        "Cross HN.jpg",
        "Eluputhal 01 HN.jpg",
        "Eribavan HN.jpg",
        "Gods Presence HN.jpg",
        "Grace HN.jpg",
        "Holiness HN.jpg",
        "Holy HN.jpg",
        "Holy Life HN.jpg",
        "Humble HN1.jpg",
        "Jebam HN.jpg",
        "Jebam HNG.jpg",
        "Love HN.jpg",
        "Mind HN.jpg",
        "Ministry HN.jpg",
        "Parisutham Hin.jpg",
        "Prayer Faith HN.jpg",
        "Run H.jpg",
        "Seek HN.jpg",
        "Sign HNl.jpg",
        "Soulburden HN.jpg",
        "Sp Maturity HN.jpg",
        "Spritual Life HN.jpg",
        "Thalmai HN.jpg",
        "Vasanam HN.jpg",
      ],
    },
    {
      id: "marathi",
      label: "Marathi",
      folder: "marathi",
      images: [
        "Church Success MN.jpg",
        "Arathanai MN.jpg",
        "Eluputhal 01 MN.jpg",
        "Grace MN.jpg",
        "Holiness MN.jpg",
        "Holy Life MN.jpg",
        "Humble MN1.jpg",
        "Jebam MN.jpg",
        "Sp Maturity MN.jpg",
        "Spritual Life MN.jpg",
        "Thalmai MN.jpg",
      ],
    },
  ];

  activeLanguage: GalleryLanguage = this.languages[0];

  lightboxOpen = false;
  lightboxIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  selectLanguage(lang: GalleryLanguage): void {
    this.activeLanguage = lang;
  }

  imagePath(lang: GalleryLanguage, img: string): string {
    return `../../../assets/img/gallery/${lang.folder}/${img}`;
  }

  openLightbox(index: number): void {
    this.lightboxIndex = index;
    this.lightboxOpen = true;
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
  }

  showNext(): void {
    const total = this.activeLanguage.images.length;
    this.lightboxIndex = (this.lightboxIndex + 1) % total;
  }

  showPrev(): void {
    const total = this.activeLanguage.images.length;
    this.lightboxIndex = (this.lightboxIndex - 1 + total) % total;
  }

  get currentLightboxImage(): string {
    return this.activeLanguage.images[this.lightboxIndex];
  }

  get currentLightboxSrc(): string {
    return this.imagePath(this.activeLanguage, this.currentLightboxImage);
  }

  @HostListener("document:keydown", ["$event"])
  handleKeydown(event: KeyboardEvent): void {
    if (!this.lightboxOpen) {
      return;
    }
    if (event.key === "Escape") {
      this.closeLightbox();
    } else if (event.key === "ArrowRight") {
      this.showNext();
    } else if (event.key === "ArrowLeft") {
      this.showPrev();
    }
  }
}
