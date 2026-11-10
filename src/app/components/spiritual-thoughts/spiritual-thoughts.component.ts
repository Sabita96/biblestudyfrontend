import { Component, OnInit } from "@angular/core";
import { DownloadService } from "app/services/download-service/download.service";

@Component({
  selector: "app-spiritual-thoughts",
  templateUrl: "./spiritual-thoughts.component.html",
  styleUrls: ["./spiritual-thoughts.component.scss"],
})
export class SpiritualThoughtsComponent implements OnInit {
  engImgArr = [
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
  ];
  tamilImgArr = [
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
  ];
  hindiImgArr = [
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
  ];
  marathiImgArr = [
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
  ];
  constructor(private downloadService: DownloadService) {}

  ngOnInit(): void {}
  downloadImg(img) {
    // console.log('img',img,'/assets/img/gallery/eng/Church%20Success%20EN.jpg');
    // let imgPath='http://localhost:4200/'+img
    // window.location.href = imgPath;
    // this.downloadService.downloadImage(imgPath).subscribe(val => {
    //   console.log(val);
    //   const url = URL.createObjectURL(val);
    //   this.downloadUrl(url, "imgPath.jpg");
    //   URL.revokeObjectURL(url);
    // },(err)=>{
    //   console.log('errrrrrrrr',err);
    // })
  }
  downloadUrl(url: string, fileName: string) {
    // const a: any = document.createElement('a');
    // a.href = url;
    // a.download = fileName;
    // document.body.appendChild(a);
    // a.style = 'display: none';
    // a.click();
    // a.remove();
  }
}
