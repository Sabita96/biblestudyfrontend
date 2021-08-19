import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgbdModalContent } from "../modal/modal.component";
import { ActivatedRoute } from "@angular/router";
import { TopicService } from "app/services/topic-service/topic.service";
import { DownloadService } from "app/services/download-service/download.service";
import { ToastrService } from "ngx-toastr";
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: "app-topic-detail",
  templateUrl: "./topic-detail.component.html",

  styleUrls: ["./topic-detail.component.scss"],
})
export class TopicDetailComponent implements OnInit {
  topicObj;
  id: string;
  isLoading = true;
  constructor(
    private modalService: NgbModal,
    private topicService: TopicService,
    private route: ActivatedRoute,
    private downloadService: DownloadService,
    private toastr: ToastrService,
    private ngxLoaderService: NgxUiLoaderService
  ) {
    console.log("this.route.snapshot.params", this.route.snapshot.params.id);

    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    // let isMobile = this.detectMob();
    // console.log("isMobile", isMobile);

    // let imgList = [
    //   "../../../assets/img/Offering.jpg",
    //   "../../../assets/img/Tabernacle.jpg",
    //   "../../../assets/img/Dress Of Priest.jpg",

    //   "../../../assets/img/Ark Of Covenant.jpg",
    // ];
    this.topicService.getTopicById(this.id).subscribe(
      (res) => {
        console.log("res", res);

        this.topicObj = res;
        let imgList = this.getImageList();

        this.topicObj.subTopics.forEach((topic, i) => {
          console.log("topic", topic);
          topic.img = imgList[i];
        });
        console.log("this.topicObj.subTopics", this.topicObj.subTopics);
        this.isLoading = false;
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
      keyboard: false,
      backdrop: true,

      size: "lg",
    });
    modalRef.componentInstance.subTopic = subTopic;
    // document
    //   .getElementById("embed-video")
    //   .setAttribute("src", "https://www.youtube.com/embed/IvWlF-XM7pk");
  }
  detectMob() {
    var check = false;
    (function (a) {
      // console.log("a", a);

      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor);
    return check;
  }
  open() {
    console.log("inside");

    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = "World";
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

        this.toastr.error("Error While downloading pdf!!!", "Error"),
          {
            timeOut: 3000,
          };
      }
    );

    // this.httpService
    //   .getPdf("http://www.africau.edu/images/default/sample.pdf")
    //   .subscribe((res) => {
    //     console.log("sssssssssssssssssssss", res);
    //   });
    // const link = document.createElement("a");
    // link.setAttribute("target", "_blank");
    // link.setAttribute(
    //   "href",
    //   "http://www.africau.edu/images/default/sample.pdf"
    // );
    // link.setAttribute("download", `products.pdf`);
    // document.body.appendChild(link);
    // link.click();
    // link.remove();
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
  getImageList() {
    let imgList = [];
    if (this.topicObj && this.topicObj.name.includes("பலிகள்")) {
      console.log("inside.................");
      imgList.push(
        "../../../assets/img/topics/topic4/Offering.jpg",
        "../../../assets/img/topics/topic4/Burnt Offering 01.jpg",
        "../../../assets/img/topics/topic4/Burnt Offering 02.jpg",
        "../../../assets/img/topics/topic4/Burnt Offering 03.jpg",
        "../../../assets/img/topics/topic4/Burnt Offering 04.jpg",
        "../../../assets/img/topics/topic4/Burnt Offering 05.jpg",
        "../../../assets/img/topics/topic4/Burnt Offering 06.jpg",
        "../../../assets/img/topics/topic4/Burnt Offering 07.jpg"
      );
    } else if (this.topicObj && this.topicObj.name.includes("ஆசாரியனின் உடை")) {
      console.log("inside.................");
      imgList.push(
        "../../../assets/img/topics/topic3/Ephod 01.jpg",
        "../../../assets/img/topics/topic3/Ephod 02.jpg",
        "../../../assets/img/topics/topic3/Breastplate.jpg",
        "../../../assets/img/topics/topic3/Robe.jpg",
        "../../../assets/img/topics/topic3/Turban.jpg",
        "../../../assets/img/topics/topic3/Undergarments.jpg"
      );
    } else if (
      this.topicObj &&
      this.topicObj.name.includes("உடன்படிக்கைப்பெட்டி")
    ) {
      console.log("inside.................");
      imgList.push(
        "../../../assets/img/topics/topic2/Ark Of Covenant 01.jpg",
        "../../../assets/img/topics/topic2/Cherubim.jpg",
        "../../../assets/img/topics/topic2/Covenant Life.jpg",
        "../../../assets/img/topics/topic2/Manna.jpg",
        "../../../assets/img/topics/topic2/Rod.jpg",
        "../../../assets/img/topics/topic2/Stone Tablets.jpg"
      );
    } else if (
      this.topicObj &&
      this.topicObj.name.includes("ஆசரிப்பு கூடாரம்")
    ) {
      console.log("inside.................");
      imgList.push(
        "../../../assets/img/topics/topic1/Lampstand.jpg",
        "../../../assets/img/topics/topic1/Showbread.jpg",
        "../../../assets/img/topics/topic1/Incense Altar.jpg",
        "../../../assets/img/topics/topic1/Incenses.jpg",
        "../../../assets/img/topics/topic1/Incense.jpg"
      );
    } else if (this.topicObj && this.topicObj.name.includes("போஜன பலி")) {
      console.log("inside.................");

      this.topicObj.subTopics.forEach((ele, i) => {
        imgList.push(
          "../../../assets/img/topics/topic5/Grain Offering 0" +
            (i + 1) +
            ".jpg"
        );
      });
      // let imgList = ["../../../assets/img/topics/topic5/Grain Offering 01.jpg"];
      return imgList;
    } else if (this.topicObj && this.topicObj.name.includes("சமாதான பலி")) {
      console.log("inside.................சமாதான பலி");
      this.topicObj.subTopics.forEach((ele, i) => {
        imgList.push(
          "../../../assets/img/topics/topic6/Peace Offering 0" +
            (i + 1) +
            ".jpg"
        );
      });
    } else if (this.topicObj && this.topicObj.name.includes("பாவநிவாரண பலி")) {
      console.log("inside.................");
      this.topicObj.subTopics.forEach((ele, i) => {
        imgList.push(
          "../../../assets/img/topics/topic7/Sin Offering 0" + (i + 1) + ".jpg"
        );
      });
      // let imgList = ["../../../assets/img/topics/topic5/Grain Offering 01.jpg"];
    }
    return imgList;
  }
}
