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
    let topicsList = [
      {
        _id: "617a959b9b4d4a4344d11828",
        isActive: true,
        isDeleted: false,
        subTopics: [
          {
            _id: "617a959a9b4d4a4344d1181f",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 1 / Revelation - 1",
            description: "",
            youtubeLink: "https://www.youtube.com/embed/tDR4bwthX8g",
            fileLink:
              "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T8_P1.pdf?alt=media",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2021-10-28T12:20:42.444Z",
            updatedAt: "2021-10-28T12:20:42.445Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "617a959a9b4d4a4344d11820",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 2 / Revelation - 2",
            description: "",
            youtubeLink: "https://www.youtube.com/embed/HmL3sSpOoAY",
            fileLink:
              "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T8_P1.pdf?alt=media",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2021-10-28T12:20:42.547Z",
            updatedAt: "2021-10-28T12:20:42.547Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "617a959a9b4d4a4344d11821",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 3 / Revelation - 3",
            description: "",
            youtubeLink: "https://www.youtube.com/embed/-kasTrpCN0g",
            fileLink:
              "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T8_P1.pdf?alt=media",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2021-10-28T12:20:42.651Z",
            updatedAt: "2021-10-28T12:20:42.651Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "617a959a9b4d4a4344d11822",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 4 / Revelation - 4",
            description: "",
            youtubeLink: "https://www.youtube.com/embed/6JgKi5mwGH4",
            fileLink:
              "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T8_P1.pdf?alt=media",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2021-10-28T12:20:42.738Z",
            updatedAt: "2021-10-28T12:20:42.738Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "617a959a9b4d4a4344d11823",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 5 / Revelation - 5",
            description: "",
            youtubeLink: "https://www.youtube.com/embed/gjjR4eN5-G8",
            fileLink:
              "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T8_P1.pdf?alt=media",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2021-10-28T12:20:42.856Z",
            updatedAt: "2021-10-28T12:20:42.856Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "617a959a9b4d4a4344d11824",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 6 / Revelation - 6",
            description: "",
            youtubeLink: "https://www.youtube.com/embed/V9v1mlxl57A",
            fileLink:
              "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T8_P1.pdf?alt=media",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2021-10-28T12:20:42.937Z",
            updatedAt: "2021-10-28T12:20:42.937Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "617a959b9b4d4a4344d11825",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 7/ Revelation - 7",
            description: "",
            youtubeLink: "https://www.youtube.com/embed/4BAjZHsc_-Y",
            fileLink:
              "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T8_P1.pdf?alt=media",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2021-10-28T12:20:43.040Z",
            updatedAt: "2021-10-28T12:20:43.040Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "617a959b9b4d4a4344d11826",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 8/ Revelation - 8",
            description: "",
            youtubeLink: "https://www.youtube.com/embed/EY1axHfDkGM",
            fileLink:
              "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T8_P1.pdf?alt=media",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2021-10-28T12:20:43.143Z",
            updatedAt: "2021-10-28T12:20:43.143Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "617a959b9b4d4a4344d11827",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 9/ Revelation - 9",
            description: "",
            youtubeLink: "https://www.youtube.com/embed/NZ25GX77FBE",
            fileLink:
              "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T8_P1.pdf?alt=media",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2021-10-28T12:20:43.240Z",
            updatedAt: "2021-10-28T12:20:43.240Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "6183ee169831d0004805c340",
            isActive: true,
            isDeleted: false,
            name: " வெளிப்படுத்துதல் - 10 / Revelation - 10",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/fQhmTzSDC64",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2021-11-04T14:28:38.366Z",
            updatedAt: "2021-11-04T14:28:38.366Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "6183ee709831d0004805c341",
            isActive: true,
            isDeleted: false,
            name: " வெளிப்படுத்துதல் - 11 / Revelation - 11",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/Y1BusrzkgAY",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2021-11-04T14:30:08.097Z",
            updatedAt: "2021-11-04T14:30:08.097Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "6187b65bd0c57b004863dc33",
            isActive: true,
            isDeleted: false,
            name: " வெளிப்படுத்துதல் - 12 / Revelation - 12",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/XzeOkPN8Pk8",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2021-11-07T11:19:55.911Z",
            updatedAt: "2021-11-07T11:19:55.911Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "61ec0faa6af23d0048b6278d",
            isActive: true,
            isDeleted: false,
            name: " வெளிப்படுத்துதல் - 13 / Revelation - 13",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/x3NVv1vZ1Hw",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-01-22T14:07:38.015Z",
            updatedAt: "2022-01-22T14:07:38.015Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "61ec10d76af23d0048b6278e",
            isActive: true,
            isDeleted: false,
            name: " வெளிப்படுத்துதல் - 14 / Revelation - 14",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/H5gRBPqEFuU",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-01-22T14:12:39.130Z",
            updatedAt: "2022-01-22T14:12:39.130Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "61ec11126af23d0048b6278f",
            isActive: true,
            isDeleted: false,
            name: " வெளிப்படுத்துதல் - 15 / Revelation - 15",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/p0TZsHvuePE",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-01-22T14:13:38.634Z",
            updatedAt: "2022-01-22T14:13:38.634Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "61ec11c16af23d0048b62790",
            isActive: true,
            isDeleted: false,
            name: " வெளிப்படுத்துதல் - 16 / Revelation - 16",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-01-22T14:16:33.828Z",
            updatedAt: "2022-01-22T14:16:33.828Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "61ec12416af23d0048b62791",
            isActive: true,
            isDeleted: false,
            name: " வெளிப்படுத்துதல் - 17 / Revelation - 17",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/ym9zeu6GAtE",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-01-22T14:18:41.003Z",
            updatedAt: "2022-01-22T14:18:41.003Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "61ec128b6af23d0048b62792",
            isActive: true,
            isDeleted: false,
            name: " வெளிப்படுத்துதல் - 18 / Revelation - 18",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/537bfjbwu_o",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-01-22T14:19:55.427Z",
            updatedAt: "2022-01-22T14:19:55.427Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "61ec12ea6af23d0048b62793",
            isActive: true,
            isDeleted: false,
            name: " வெளிப்படுத்துதல் - 19 / Revelation - 19",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/QaLmFsLNnTk",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-01-22T14:21:30.106Z",
            updatedAt: "2022-01-22T14:21:30.106Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "61ec13fe6af23d0048b62794",
            isActive: true,
            isDeleted: false,
            name: " வெளிப்படுத்துதல் - 20 / Revelation - 20",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/lXzDKnBevCo",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-01-22T14:26:06.375Z",
            updatedAt: "2022-01-22T14:26:06.375Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "61fbcb0921b17800489abd00",
            isActive: true,
            isDeleted: false,
            name: " வெளிப்படுத்துதல் - 21 / Revelation - 21",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/BP1_AOhaZKs",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-02-03T12:31:05.603Z",
            updatedAt: "2022-02-03T12:31:05.603Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "61fbcb8721b17800489abd01",
            isActive: true,
            isDeleted: false,
            name: " வெளிப்படுத்துதல் - 22 / Revelation - 22",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/l_-cbpDKy6I",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-02-03T12:33:11.205Z",
            updatedAt: "2022-02-03T12:33:11.205Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "620a81f2cb2b550048ec0df7",
            isActive: true,
            isDeleted: false,
            name: " வெளிப்படுத்துதல் - 23 / Revelation - 23",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/54fMwTSgHPU",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-02-14T16:23:14.675Z",
            updatedAt: "2022-02-14T16:23:14.676Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "620a81fdcb2b550048ec0df8",
            isActive: true,
            isDeleted: false,
            name: " வெளிப்படுத்துதல் - 24 / Revelation - 24",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/mtqgIoGmFtA",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-02-14T16:23:25.944Z",
            updatedAt: "2022-02-14T16:23:25.944Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "620f84c389abd0004853ba3b",
            isActive: true,
            isDeleted: false,
            name: " வெளிப்படுத்துதல் - 25 / Revelation - 25",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/okN9yCBk15U",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-02-18T11:36:35.668Z",
            updatedAt: "2022-02-18T11:36:35.668Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "6230c7adf7596b0048750537",
            isActive: true,
            isDeleted: false,
            name: " வெளிப்படுத்துதல் - 26 / Revelation - 26",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/rwsOByRbqQw",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-03-15T17:06:53.141Z",
            updatedAt: "2022-03-15T17:06:53.141Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "6230c7d5f7596b0048750538",
            isActive: true,
            isDeleted: false,
            name: " வெளிப்படுத்துதல் - 27 / Revelation - 27",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/Qt-XAcba57A",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-03-15T17:07:33.605Z",
            updatedAt: "2022-03-15T17:07:33.605Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "6230c879f7596b0048750539",
            isActive: true,
            isDeleted: false,
            name: " வெளிப்படுத்துதல் - 28 / Revelation - 28 ",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/Im5s1qkbRNQ",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-03-15T17:10:17.665Z",
            updatedAt: "2022-03-15T17:10:17.665Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "6235e2345e3d2d00488a038d",
            isActive: true,
            isDeleted: false,
            name: " வெளிப்படுத்துதல் - 29 / Revelation - 29 ",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/t0htd2dXySk",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-03-19T14:01:24.514Z",
            updatedAt: "2022-03-19T14:01:24.514Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "6242e320b8c1820048b45bb6",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 30 / Revelation - 30",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/KEJLk4tZipc",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-03-29T10:44:48.105Z",
            updatedAt: "2022-03-29T10:44:48.105Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "624c780b9456340048e64772",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 31 / Revelation - 31",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/7KG8brSeOVo",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-04-05T17:10:35.680Z",
            updatedAt: "2022-04-05T17:10:35.680Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "6251943942ac9a0048a61add",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 32 / Revelation - 32",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/TukYWolYZn0",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-04-09T14:12:09.469Z",
            updatedAt: "2022-04-09T14:12:09.469Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "6297a41eedbd520048eecf15",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 33 / Revelation - 33",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/gbFzGmXrXhs",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-06-01T17:38:38.724Z",
            updatedAt: "2022-06-01T17:38:38.724Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "6297a446edbd520048eecf16",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 34 / Revelation - 34",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/G12y01xmQXw",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-06-01T17:39:18.764Z",
            updatedAt: "2022-06-01T17:39:18.764Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "6297a459edbd520048eecf17",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 35 / Revelation - 35",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/jMWaBbJAF94",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-06-01T17:39:37.429Z",
            updatedAt: "2022-06-01T17:39:37.429Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "6298e5c81d630000483a1b27",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 36 / Revelation - 36",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/sbNe78aukt8",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-06-02T16:31:04.489Z",
            updatedAt: "2022-06-02T16:31:04.489Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "62a8881d20da0700485d4024",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 37 / Revelation - 37",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/_6edVyRfaY0",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-06-14T13:07:41.621Z",
            updatedAt: "2022-06-14T13:07:41.622Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "62bbacecd4988a00484d678f",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 38 / Revelation - 38",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/GG9MvvSXR9Q",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-06-29T01:37:48.055Z",
            updatedAt: "2022-06-29T01:37:48.055Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "62c9920eaffb210048b0a184",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 39 / Revelation - 39",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/S9wpqIV-qWc",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-07-09T14:34:54.149Z",
            updatedAt: "2022-07-09T14:34:54.149Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "62c99258affb210048b0a185",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 40 / Revelation - 40",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/whQXb3x8kds",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-07-09T14:36:08.965Z",
            updatedAt: "2022-07-09T14:36:08.965Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "62e36a054cc86c004891f415",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 41 / Revelation - 41",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/q_Z6eFRIa2g",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-07-29T05:03:01.534Z",
            updatedAt: "2022-07-29T05:03:01.534Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "62e36a164cc86c004891f416",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 42 / Revelation - 42",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/3uZRVuRslWI",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-07-29T05:03:18.334Z",
            updatedAt: "2022-07-29T05:03:18.334Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "62edc97caa25760048ea0279",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 43 / Revelation - 43",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/kjh4-WWxpO0",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-08-06T01:53:00.971Z",
            updatedAt: "2022-08-06T01:53:00.971Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "62edc9b0aa25760048ea027a",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 44 / Revelation - 44",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/BuYcBZbXfU8",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-08-06T01:53:52.795Z",
            updatedAt: "2022-08-06T01:53:52.795Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "638630ecc7f082004827023f",
            isActive: true,
            isDeleted: false,
            name: "வெளிப்படுத்துதல் - 46 / Revelation - 46",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/mlVczVg3DOs",
            fileLink: "",
            notesLink: {
              tamil: "",
              english: "",
            },
            createdAt: "2022-11-29T16:18:52.593Z",
            updatedAt: "2022-11-29T16:18:52.594Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
        ],
        name: "வெளிப்படுத்துதல் / Revelation",
        description:
          "அப்போஸ்தலனாகிய யோவான் மூலமாய் ஆவியானவர் வெளிப்படுத்தின உலகத்தின் முடிவுநாட்களில் நடக்கப்போகும் போகும் காரியத்தை குறித்து நாம் தியானித்து இயேசுவின் வருகைக்கு நம்மை ஆயத்தப்படுத்துவோம்.",
        createdAt: "2021-10-28T12:20:43.347Z",
        updatedAt: "2021-10-28T12:20:43.347Z",
        createdBy: "",
        updatedBy: "",
        __v: 0,
      },
      {
        _id: "6161cd022a3e6146c025c37b",
        isActive: true,
        isDeleted: false,
        subTopics: [
          {
            _id: "6161cd012a3e6146c025c37a",
            isActive: true,
            isDeleted: false,
            name: " இஸ்ரவேல் கோத்திரங்கள் -1 / Tribes Of Israel -1",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/oUc4G7X-6kM",
            fileLink:
              "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T8_P1.pdf?alt=media",
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T9_P1.pdf?alt=media",
              english:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-bible-study.appspot.com/o/T9_P1_Eng.pdf?alt=media",
            },
            createdAt: "2021-10-09T17:10:25.850Z",
            updatedAt: "2021-10-09T17:10:25.850Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "6166bf1752d2a43e68328131",
            isActive: true,
            isDeleted: false,
            name: " இஸ்ரவேல் கோத்திரங்கள் - 2 / Tribes Of Israel - 2",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/3s8dCyqKwlk",
            fileLink:
              "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T8_P1.pdf?alt=media",
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T9_P2.pdf?alt=media",
              english:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-bible-study.appspot.com/o/T9_P2_Eng.pdf?alt=media",
            },
            createdAt: "2021-10-13T11:12:23.061Z",
            updatedAt: "2021-10-13T11:12:23.061Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "6176d7da0a2bc53e8c539219",
            isActive: true,
            isDeleted: false,
            name: " இஸ்ரவேல் கோத்திரங்கள் - 3 / Tribes Of Israel - 3",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/DG0q8WmjRXs",
            fileLink:
              "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T8_P1.pdf?alt=media",
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T9_P3.pdf?alt=media",
              english:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-bible-study.appspot.com/o/T9_P3_Eng.pdf?alt=media",
            },
            createdAt: "2021-10-25T16:14:18.290Z",
            updatedAt: "2021-10-25T16:14:18.291Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "617c35fb803e711f3458ddd4",
            isActive: true,
            isDeleted: false,
            name: " இஸ்ரவேல் கோத்திரங்கள் - 4 / Tribes Of Israel - 4",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/p_0lQ-HfnkI",
            fileLink:
              "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T8_P1.pdf?alt=media",
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T9_P4.pdf?alt=media",
              english: "",
            },
            createdAt: "2021-10-29T17:57:15.355Z",
            updatedAt: "2021-10-29T17:57:15.355Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "6183eb099831d0004805c33f",
            isActive: true,
            isDeleted: false,
            name: " இஸ்ரவேல் கோத்திரங்கள் - 5 / Tribes Of Israel - 5",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/0FeSR6ycJIg",
            fileLink:
              "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T9_P5.pdf?alt=media",
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T9_P5.pdf?alt=media",
              english: "",
            },
            createdAt: "2021-11-04T14:15:37.125Z",
            updatedAt: "2021-11-04T14:15:37.125Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "618e9f98b4f08c00489954cd",
            isActive: true,
            isDeleted: false,
            name: "இஸ்ரவேல் கோத்திரங்கள் -6 / Tribes Of Israel -6",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/4yl-AwKo9S8",
            fileLink: "",
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T9_P6.pdf?alt=media",
              english: "",
            },
            createdAt: "2021-11-12T17:08:40.995Z",
            updatedAt: "2021-11-12T17:08:40.995Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "61ec16336af23d0048b62795",
            isActive: true,
            isDeleted: false,
            name: "இஸ்ரவேல் கோத்திரங்கள் -7 / Tribes Of Israel -7",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/q1fium1G0YE",
            fileLink: "",
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T9_P7.pdf?alt=media",
              english: "",
            },
            createdAt: "2022-01-22T14:35:31.702Z",
            updatedAt: "2022-01-22T14:35:31.702Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "61ec16e76af23d0048b62796",
            isActive: true,
            isDeleted: false,
            name: "இஸ்ரவேல் கோத்திரங்கள் -8 / Tribes Of Israel -8",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/0Rd7M1mz1BM",
            fileLink: "",
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T9_P8.pdf?alt=media",
              english: "",
            },
            createdAt: "2022-01-22T14:38:31.434Z",
            updatedAt: "2022-01-22T14:38:31.434Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "61ec170c6af23d0048b62797",
            isActive: true,
            isDeleted: false,
            name: "இஸ்ரவேல் கோத்திரங்கள் -9 / Tribes Of Israel -9",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/j5u1DN-XlYY",
            fileLink: "",
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T9_P9.pdf?alt=media",
              english: "",
            },
            createdAt: "2022-01-22T14:39:08.468Z",
            updatedAt: "2022-01-22T14:39:08.468Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "61ec17906af23d0048b62798",
            isActive: true,
            isDeleted: false,
            name: "இஸ்ரவேல் கோத்திரங்கள் -10 / Tribes Of Israel -10",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/tBDFjM0Vvec",
            fileLink: "",
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T9_P10.pdf?alt=media",
              english: "",
            },
            createdAt: "2022-01-22T14:41:20.466Z",
            updatedAt: "2022-01-22T14:41:20.466Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "61ec19116af23d0048b62799",
            isActive: true,
            isDeleted: false,
            name: "இஸ்ரவேல் கோத்திரங்கள் -11 / Tribes Of Israel -11",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/sObLB4SOoxQ",
            fileLink: "",
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T9_P11.pdf?alt=media",
              english: "",
            },
            createdAt: "2022-01-22T14:47:45.068Z",
            updatedAt: "2022-01-22T14:47:45.068Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "61ec19826af23d0048b6279a",
            isActive: true,
            isDeleted: false,
            name: "இஸ்ரவேல் கோத்திரங்கள் -12 / Tribes Of Israel -12",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/CIirt61Y-TQ",
            fileLink: "",
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T9_P12.pdf?alt=media",
              english: "",
            },
            createdAt: "2022-01-22T14:49:38.493Z",
            updatedAt: "2022-01-22T14:49:38.493Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "61ec1aa86af23d0048b6279b",
            isActive: true,
            isDeleted: false,
            name: "இஸ்ரவேல் கோத்திரங்கள் -13 / Tribes Of Israel -13",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "",
            fileLink: "",
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T9_P13.pdf?alt=media",
              english: "",
            },
            createdAt: "2022-01-22T14:54:32.867Z",
            updatedAt: "2022-01-22T14:54:32.867Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "61fbd52621b17800489abd02",
            isActive: true,
            isDeleted: false,
            name: "இஸ்ரவேல் கோத்திரங்கள் -14 / Tribes Of Israel -14",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/_gSWksMm9rs",
            fileLink: "",
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T9_P14.pdf?alt=media",
              english: "",
            },
            createdAt: "2022-02-03T13:14:14.592Z",
            updatedAt: "2022-02-03T13:14:14.592Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "61fbd5b421b17800489abd03",
            isActive: true,
            isDeleted: false,
            name: "இஸ்ரவேல் கோத்திரங்கள் -15 / Tribes Of Israel -15",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/K5qAXtj6p0U",
            fileLink: "",
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T9_P15.pdf?alt=media",
              english: "",
            },
            createdAt: "2022-02-03T13:16:36.313Z",
            updatedAt: "2022-02-03T13:16:36.313Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "620a8286cb2b550048ec0df9",
            isActive: true,
            isDeleted: false,
            name: "இஸ்ரவேல் கோத்திரங்கள் -16 / Tribes Of Israel -16",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/sjMGkGF1KVc",
            fileLink: "",
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T9_P16.pdf?alt=media",
              english: "",
            },
            createdAt: "2022-02-14T16:25:42.030Z",
            updatedAt: "2022-02-14T16:25:42.030Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "620f84eb89abd0004853ba3c",
            isActive: true,
            isDeleted: false,
            name: "இஸ்ரவேல் கோத்திரங்கள் -17 / Tribes Of Israel -17",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/KPAvUlQUKyU",
            fileLink: "",
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T9_P17.pdf?alt=media",
              english: "",
            },
            createdAt: "2022-02-18T11:37:15.894Z",
            updatedAt: "2022-02-18T11:37:15.894Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "62c992f3affb210048b0a186",
            isActive: true,
            isDeleted: false,
            name: "இஸ்ரவேல் கோத்திரங்கள் -18 / Tribes Of Israel -18",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/IOq9YMLKalI",
            fileLink: "",
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T9_P18.pdf?alt=media",
              english: "",
            },
            createdAt: "2022-07-09T14:38:43.856Z",
            updatedAt: "2022-07-09T14:38:43.856Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "62c993c6affb210048b0a187",
            isActive: true,
            isDeleted: false,
            name: "இஸ்ரவேல் கோத்திரங்கள் - 19 / Tribes Of Israel - 19",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/X9OHmt2BoZo",
            fileLink: "",
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T9_P19.pdf?alt=media",
              english: "",
            },
            createdAt: "2022-07-09T14:42:14.413Z",
            updatedAt: "2022-07-09T14:42:14.413Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "62c9945baffb210048b0a188",
            isActive: true,
            isDeleted: false,
            name: "இஸ்ரவேல் கோத்திரங்கள் - 20 / Tribes Of Israel - 20",
            description:
              "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/VV3R6EY5WT8",
            fileLink: "",
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T9_P20.pdf?alt=media",
              english: "",
            },
            createdAt: "2022-07-09T14:44:43.172Z",
            updatedAt: "2022-07-09T14:44:43.172Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
        ],
        name: " இஸ்ரவேல் கோத்திரங்கள் / Tribes Of Israel",
        description:
          "தேவனால் தெரிந்துகொள்ளப்பட்டு பரிசுத்த ஜனமாயும், இயேசு இப்புவியில் வர காரணமான சந்ததியாயும், பரலோகத்தில் நன்மையை சுதந்தரிக்கும் ஜனமாகவும் இருக்கும் இஸ்ரவேலின் 12 கோத்திரங்களை குறித்து இப்பகுதியில் தியானிக்கலாம்.",
        createdAt: "2021-10-09T17:10:26.121Z",
        updatedAt: "2021-10-09T17:10:26.121Z",
        createdBy: "",
        updatedBy: "",
        __v: 0,
      },
      {
        _id: "615064f51029ca3be494f520",
        isActive: true,
        isDeleted: false,
        subTopics: [
          {
            _id: "615064f21029ca3be494f51f",
            isActive: true,
            isDeleted: false,
            name: " குற்றநிவாரண பலி -1 / TRESPASS OFFERINGS -1",
            description:
              "ஒருவன் கர்த்தருக்குரிய பரிசுத்தமானவவகளிே் குற்றஞ்சசய்யும் லபாதும், பிற மனிதனுக்கு விலராதமாகவும் அநியாயஞ்சசய்து யாசதாரு காரியத்திே் குற்றம் சசய்து அவன் தான் சசய்த குற்றத்திற்காக சசலுத்தப்படும் பலிலய குற்றநிவாரண பலி ஆகும்.",
            youtubeLink: "https://www.youtube.com/embed/UVk3B-VU_ts",
            fileLink:
              "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T8_P1.pdf?alt=media",
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T8_P1.pdf?alt=media",
              english:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-bible-study.appspot.com/o/T8_P1_Eng.pdf?alt=media",
            },
            createdAt: "2021-09-26T12:17:54.038Z",
            updatedAt: "2021-09-26T12:17:54.038Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
          {
            _id: "615418531aafc946b834094b",
            isActive: true,
            isDeleted: false,
            name: " குற்றநிவாரண பலி -2 / Tresspass Offering -2",
            description:
              "ஒருவன் கர்த்தருக்குரிய பரிசுத்தமானவவகளிே் குற்றஞ்சசய்யும் லபாதும், பிற மனிதனுக்கு விலராதமாகவும் அநியாயஞ்சசய்து யாசதாரு காரியத்திே் குற்றம் சசய்து அவன் தான் சசய்த குற்றத்திற்காக சசலுத்தப்படும் பலிலய குற்றநிவாரண பலி ஆகும்.",
            youtubeLink: "https://www.youtube.com/embed/FBRUHNfiazk",
            fileLink:
              "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T8_P1.pdf?alt=media",
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T8_P2.pdf?alt=media",
              english:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-bible-study.appspot.com/o/T8_P2_Eng.pdf?alt=media",
            },
            createdAt: "2021-09-29T07:40:03.671Z",
            updatedAt: "2021-09-29T07:40:03.671Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
          },
        ],
        name: " குற்றநிவாரண பலி / TRESPASS OFFERINGS",
        description:
          "ஒருவன் கர்த்தருக்குரிய பரிசுத்தமானவவகளிே் குற்றஞ்சசய்யும் லபாதும், பிற மனிதனுக்கு விலராதமாகவும் அநியாயஞ்சசய்து யாசதாரு காரியத்திே் குற்றம் சசய்து அவன் தான் சசய்த குற்றத்திற்காக சசலுத்தப்படும் பலிலய குற்றநிவாரண பலி ஆகும்.",
        createdAt: "2021-09-26T12:17:57.700Z",
        updatedAt: "2021-09-26T12:17:57.700Z",
        createdBy: "",
        updatedBy: "",
        __v: 0,
      },
      {
        _id: "611d3ab74197302f6849b342",
        isActive: true,
        isDeleted: false,
        subTopics: [
          {
            _id: "611d3ab74197302f6849b341",
            isActive: true,
            isDeleted: false,
            name: "பாவநிவாரண பலி - 1 / Sin Offering - 1",
            description:
              "ஒருவன் அறியாமையினால் கர்த்தருடைய கட்டளைகளில் யாதொன்றை மீறி செய்யத்தகாததை செய்து பாவத்திற்குட்பட்டால் அவன் அந்த பாவத்திற்கு நிவாரணமாக செலுத்தும் பலிக்கே பாவநிவாரணபலி என்று பெயர்.",
            youtubeLink: "https://www.youtube.com/embed/q69YeRzIklg",
            createdAt: "2021-08-18T16:52:07.236Z",
            updatedAt: "2021-08-18T16:52:07.236Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T7_P1.pdf?alt=media",
            },
          },
          {
            _id: "612673ec6249793de886f16e",
            isActive: true,
            isDeleted: false,
            name: "பாவநிவாரணபலி - 2 / Sin Offering - 2",
            description:
              "ஒருவன் அறியாமையினால் கர்த்தருடைய கட்டளைகளில் யாதொன்றை மீறி செய்யத்தகாததை செய்து பாவத்திற்குட்பட்டால் அவன் அந்த பாவத்திற்கு நிவாரணமாக செலுத்தும் பலிக்கே பாவநிவாரணபலி என்று பெயர்.",
            youtubeLink: "https://www.youtube.com/embed/esVr014d-CU",
            createdAt: "2021-08-25T16:46:36.382Z",
            updatedAt: "2021-08-25T16:46:36.382Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T7_P2.pdf?alt=media",
            },
          },
          {
            _id: "613f815b20c9f63afcc7f0dc",
            isActive: true,
            isDeleted: false,
            name: "பாவநிவாரணபலி - 3 / Sin Offering - 3",
            description:
              "ஒருவன் அறியாமையினால் கர்த்தருடைய கட்டளைகளில் யாதொன்றை மீறி செய்யத்தகாததை செய்து பாவத்திற்குட்பட்டால் அவன் அந்த பாவத்திற்கு நிவாரணமாக செலுத்தும் பலிக்கே பாவநிவாரணபலி என்று பெயர்.",
            youtubeLink: "https://youtu.be/embed/CZS01bG7Svw",
            createdAt: "2021-09-13T16:50:35.716Z",
            updatedAt: "2021-09-13T16:50:35.716Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T7_P3.pdf?alt=media",
            },
          },
          {
            _id: "613f814920c9f63afcc7f0db",
            isActive: true,
            isDeleted: false,
            name: "பாவநிவாரணபலி - 4 / Sin Offering - 4",
            description:
              "ஒருவன் அறியாமையினால் கர்த்தருடைய கட்டளைகளில் யாதொன்றை மீறி செய்யத்தகாததை செய்து பாவத்திற்குட்பட்டால் அவன் அந்த பாவத்திற்கு நிவாரணமாக செலுத்தும் பலிக்கே பாவநிவாரணபலி என்று பெயர்.",
            youtubeLink: "https://youtu.be/embed/PqeonQ4o9_E",
            createdAt: "2021-09-13T16:50:17.932Z",
            updatedAt: "2021-09-13T16:50:17.932Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T7_P4.pdf?alt=media",
            },
          },
          {
            _id: "614b696910b26b4b3814e660",
            isActive: true,
            isDeleted: false,
            name: "பாவநிவாரணபலி - 5 / Sin Offering - 5",
            description:
              "ஒருவன் அறியாமையினால் கர்த்தருடைய கட்டளைகளில் யாதொன்றை மீறி செய்யத்தகாததை செய்து பாவத்திற்குட்பட்டால் அவன் அந்த பாவத்திற்கு நிவாரணமாக செலுத்தும் பலிக்கே பாவநிவாரணபலி என்று பெயர்.",
            youtubeLink: "https://www.youtube.com/embed/zPVI1-kSTOQ",
            createdAt: "2021-09-22T17:35:37.754Z",
            updatedAt: "2021-09-22T17:35:37.754Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T7_P5.pdf?alt=media",
            },
          },
        ],
        name: "பாவநிவாரண பலி / Sin Offering",
        description:
          "ஒருவன் அறியாமையினால் கர்த்தருடைய கட்டளைகளில் யாதொன்றை மீறி செய்யத்தகாததை செய்து பாவத்திற்குட்பட்டால் அவன் அந்த பாவத்திற்கு நிவாரணமாக செலுத்தும் பலிக்கே பாவநிவாரணபலி என்று பெயர்.",
        createdAt: "2021-08-18T16:52:07.300Z",
        updatedAt: "2021-08-18T16:52:07.300Z",
        createdBy: "",
        updatedBy: "",
        __v: 0,
      },
      {
        _id: "61069d4d998a7b0694e29d80",
        isActive: true,
        isDeleted: false,
        subTopics: [
          {
            _id: "61069d4d998a7b0694e29d7e",
            isActive: true,
            isDeleted: false,
            name: "சமாதான பலி - 1 / Peace Offering - 1",
            description:
              "தேவனுக்கும் மனிதனுக்குமிடையில் சமாதானம் உண்டாக்கவும், தூரமாயிருந்த மனிதனை தேவனோடு இணைக்கவும், யூதர்களையும் புறஜாதிகளையும் ஒப்புரவாக்கவும் தேவனால் மனிதனுக்கு கொடுக்கப்பட்டதுதான் சமாதானபலி. அதை விரிவாக இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/e8W387Q9KFc",
            createdAt: "2021-08-01T13:10:37.587Z",
            updatedAt: "2021-08-01T13:10:37.588Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T6_P1.pdf?alt=media",
            },
          },
          {
            _id: "61069d4d998a7b0694e29d7f",
            isActive: true,
            isDeleted: false,
            name: "சமாதான பலி - 2 / Peace Offering - 2",
            description:
              "தேவனுக்கும் மனிதனுக்குமிடையில் சமாதானம் உண்டாக்கவும், தூரமாயிருந்த மனிதனை தேவனோடு இணைக்கவும், யூதர்களையும் புறஜாதிகளையும் ஒப்புரவாக்கவும் தேவனால் மனிதனுக்கு கொடுக்கப்பட்டதுதான் சமாதானபலி. அதை விரிவாக இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/0iltFMILW0I",
            createdAt: "2021-08-01T13:10:37.652Z",
            updatedAt: "2021-08-01T13:10:37.652Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T6_P2.pdf?alt=media",
            },
          },
          {
            _id: "610bf4d53b1c6845ac1bd4ce",
            isActive: true,
            isDeleted: false,
            name: "சமாதான பலி - 3 / Peace Offering - 3",
            description:
              "தேவனுக்கும் மனிதனுக்குமிடையில் சமாதானம் உண்டாக்கவும், தூரமாயிருந்த மனிதனை தேவனோடு இணைக்கவும், யூதர்களையும் புறஜாதிகளையும் ஒப்புரவாக்கவும் தேவனால் மனிதனுக்கு கொடுக்கப்பட்டதுதான் சமாதானபலி. அதை விரிவாக இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/YGwp3H3OnHI",
            createdAt: "2021-08-05T14:25:25.456Z",
            updatedAt: "2021-08-05T14:25:25.456Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T6_P3.pdf?alt=media",
            },
          },
          {
            _id: "611d39204197302f6849b340",
            isActive: true,
            isDeleted: false,
            name: "சமாதான பலி - 4 / Peace Offering - 4",
            description:
              "தேவனுக்கும் மனிதனுக்குமிடையில் சமாதானம் உண்டாக்கவும், தூரமாயிருந்த மனிதனை தேவனோடு இணைக்கவும், யூதர்களையும் புறஜாதிகளையும் ஒப்புரவாக்கவும் தேவனால் மனிதனுக்கு கொடுக்கப்பட்டதுதான் சமாதானபலி. அதை விரிவாக இப்பகுதியில் தியானிக்கலாம்.",
            youtubeLink: "https://www.youtube.com/embed/cIw6AyK4fEE",
            createdAt: "2021-08-18T16:45:20.142Z",
            updatedAt: "2021-08-18T16:45:20.143Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T6_P4.pdf?alt=media",
            },
          },
        ],
        name: "சமாதான பலி / Peace Offering",
        description:
          "தேவனுக்கும் மனிதனுக்குமிடையில் சமாதானம் உண்டாக்கவும், தூரமாயிருந்த மனிதனை தேவனோடு இணைக்கவும், யூதர்களையும் புறஜாதிகளையும் ஒப்புரவாக்கவும் தேவனால் மனிதனுக்கு கொடுக்கப்பட்டதுதான் சமாதானபலி. அதை விரிவாக இப்பகுதியில் தியானிக்கலாம்.",
        createdAt: "2021-08-01T13:10:37.693Z",
        updatedAt: "2021-08-01T13:10:37.694Z",
        createdBy: "",
        updatedBy: "",
        __v: 0,
      },
      {
        _id: "60dac253d019552d04ff1699",
        isActive: true,
        isDeleted: false,
        subTopics: [
          {
            _id: "60dac253d019552d04ff1698",
            isActive: true,
            isDeleted: false,
            name: "போஜனபலி - 1 / Grain Offering - 1",
            youtubeLink: "https://www.youtube.com/embed/pxLGG36mW2s",
            description:
              "சாதாரண மக்கள் தங்கள் ஒவ்வொரு நாளும் உண்ணும் உணவிலிருந்து சாதாரண முறையில் கொடுக்கப்படும் பலி போஜனபலி. ஆனால் எல்லா பலிகளை காட்டிலும் மிகவும் பரிசுத்தமான பலி போஜனபலியாகும்.",
            createdAt: "2021-06-29T06:48:51.223Z",
            updatedAt: "2021-06-29T06:48:51.224Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T5_P1.pdf?alt=media",
            },
          },
          {
            _id: "60e5b4a66af5e562287ed2ea",
            isActive: true,
            isDeleted: false,
            name: "போஜனபலி - 2 / Grain Offering - 2",
            youtubeLink: "https://www.youtube.com/embed/6ru5E0JOJ3U",
            description:
              "சாதாரண மக்கள் தங்கள் ஒவ்வொரு நாளும் உண்ணும் உணவிலிருந்து சாதாரண முறையில் கொடுக்கப்படும் பலி போஜனபலி. ஆனால் எல்லா பலிகளை காட்டிலும் மிகவும் பரிசுத்தமான பலி போஜனபலியாகும்.",
            createdAt: "2021-07-07T14:05:26.017Z",
            updatedAt: "2021-07-07T14:05:26.017Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T5_P2.pdf?alt=media",
            },
          },
          {
            _id: "60ef07282b612d3e044097c0",
            isActive: true,
            isDeleted: false,
            name: "போஜனபலி - 3 / Grain Offering - 3",
            youtubeLink: "https://www.youtube.com/embed/YyA1uyvwwV4",
            description:
              "சாதாரண மக்கள் தங்கள் ஒவ்வொரு நாளும் உண்ணும் உணவிலிருந்து சாதாரண முறையில் கொடுக்கப்படும் பலி போஜனபலி. ஆனால் எல்லா பலிகளை காட்டிலும் மிகவும் பரிசுத்தமான பலி போஜனபலியாகும்.",
            createdAt: "2021-07-14T15:47:52.719Z",
            updatedAt: "2021-07-14T15:47:52.720Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T5_P3.pdf?alt=media",
            },
          },
          {
            _id: "60ef1c8c6d747124d42bb400",
            isActive: true,
            isDeleted: false,
            name: "போஜனபலி - 4 / Grain Offering - 4",
            youtubeLink: "https://www.youtube.com/embed/T7TyQ8Di4xY",
            description:
              "சாதாரண மக்கள் தங்கள் ஒவ்வொரு நாளும் உண்ணும் உணவிலிருந்து சாதாரண முறையில் கொடுக்கப்படும் பலி போஜனபலி. ஆனால் எல்லா பலிகளை காட்டிலும் மிகவும் பரிசுத்தமான பலி போஜனபலியாகும்.",
            createdAt: "2021-07-14T17:19:08.837Z",
            updatedAt: "2021-07-14T17:19:08.837Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T5_P4.pdf?alt=media",
            },
          },
        ],
        name: "போஜனபலி / Grain Offering",
        description:
          "சாதாரண மக்கள் தங்கள் ஒவ்வொரு நாளும் உண்ணும் உணவிலிருந்து சாதாரண முறையில் கொடுக்கப்படும் பலி போஜனபலி. ஆனால் எல்லா பலிகளை காட்டிலும் மிகவும் பரிசுத்தமான பலி போஜனபலியாகும்.",
        createdAt: "2021-06-29T06:48:51.365Z",
        updatedAt: "2021-06-29T06:48:51.365Z",
        createdBy: "",
        updatedBy: "",
        __v: 0,
      },
      {
        _id: "60d219e92ff4c93834260750",
        isActive: true,
        isDeleted: false,
        subTopics: [
          {
            _id: "60d219e72ff4c93834260748",
            isActive: true,
            isDeleted: false,
            name: "பலிகள் அறிமுகம் / Offerings Introduction",
            youtubeLink: "https://www.youtube.com/embed/m4Vr47Z27UI",
            description:
              "ஆசரிப்பு கூடாரத்தில் ஆசிரியர்களும் ஜனங்களும் என்னென்ன பலிகள் கொடுக்க வேண்டும், கொண்டு வரவேண்டிய பலிபொருட்கள், அது எப்படி பலியிட்டால் தேவனுக்கு சுகந்த வாசனையாய் மாறும் என்பதை எப்பகுதில் நாம் தியானிக்கலாம்.",
            createdAt: "2021-06-22T17:12:07.801Z",
            updatedAt: "2021-06-22T17:12:07.801Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T4_P1.pdf?alt=media",
            },
          },
          {
            _id: "60d219e72ff4c93834260749",
            isActive: true,
            isDeleted: false,
            name: "சர்வாங்க தகனபலி- 1 / Burnt Offering- 1 ",
            youtubeLink: "https://www.youtube.com/embed/2w9XetQ3g_4",
            description:
              "தேவனுக்கு கொடுக்கப்படும் பலிகளில் மேன்மையான பலியாகிய சர்வாங்க தகனபலி எப்படி கொடுவரவேண்டும், பலியிடும் முறைகளை கற்றுக்கொண்டு, நம் வாழ்வை எப்படி தேவனுக்கு சுகந்த வாசனையாய் மாற்றமுடியும் என்பதை எப்பகுதில் நாம் தியானிக்கலாம்.",
            createdAt: "2021-06-22T17:12:07.965Z",
            updatedAt: "2021-06-22T17:12:07.965Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T4_P2.pdf?alt=media",
            },
          },
          {
            _id: "60d219e82ff4c9383426074a",
            isActive: true,
            isDeleted: false,
            name: "சர்வாங்க தகனபலி- 2 / Burnt Offering- 2",
            youtubeLink: "https://www.youtube.com/embed/4U1EhvrDzpg",
            description:
              "தேவனுக்கு கொடுக்கப்படும் பலிகளில் மேன்மையான பலியாகிய சர்வாங்க தகனபலி எப்படி கொடுவரவேண்டும், பலியிடும் முறைகளை கற்றுக்கொண்டு, நம் வாழ்வை எப்படி தேவனுக்கு சுகந்த வாசனையாய் மாற்றமுடியும் என்பதை எப்பகுதில் நாம் தியானிக்கலாம்.",
            createdAt: "2021-06-22T17:12:08.154Z",
            updatedAt: "2021-06-22T17:12:08.154Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T4_P3.pdf?alt=media",
            },
          },
          {
            _id: "60d219e82ff4c9383426074b",
            isActive: true,
            isDeleted: false,
            name: "சர்வாங்க தகனபலி- 3 / Burnt Offering- 3",
            youtubeLink: "https://www.youtube.com/embed/3qkcUCOyysY",
            description:
              "தேவனுக்கு கொடுக்கப்படும் பலிகளில் மேன்மையான பலியாகிய சர்வாங்க தகனபலி எப்படி கொடுவரவேண்டும், பலியிடும் முறைகளை கற்றுக்கொண்டு, நம் வாழ்வை எப்படி தேவனுக்கு சுகந்த வாசனையாய் மாற்றமுடியும் என்பதை எப்பகுதில் நாம் தியானிக்கலாம்.",
            createdAt: "2021-06-22T17:12:08.359Z",
            updatedAt: "2021-06-22T17:12:08.360Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T4_P4.pdf?alt=media",
            },
          },
          {
            _id: "60d219e82ff4c9383426074c",
            isActive: true,
            isDeleted: false,
            name: "சர்வாங்க தகனபலி- 4/ Burnt Offering- 4",
            youtubeLink: "https://www.youtube.com/embed/HOEe_4yKqiE",
            description:
              "தேவனுக்கு கொடுக்கப்படும் பலிகளில் மேன்மையான பலியாகிய சர்வாங்க தகனபலி எப்படி கொடுவரவேண்டும், பலியிடும் முறைகளை கற்றுக்கொண்டு, நம் வாழ்வை எப்படி தேவனுக்கு சுகந்த வாசனையாய் மாற்றமுடியும் என்பதை எப்பகுதில் நாம் தியானிக்கலாம்.",
            createdAt: "2021-06-22T17:12:08.547Z",
            updatedAt: "2021-06-22T17:12:08.547Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T4_P5.pdf?alt=media",
            },
          },
          {
            _id: "60d219e82ff4c9383426074d",
            isActive: true,
            isDeleted: false,
            name: "சர்வாங்க தகனபலி- 5 / Burnt Offering- 5",
            youtubeLink: "https://www.youtube.com/embed/sxxaDeSqvQA",
            description:
              "தேவனுக்கு கொடுக்கப்படும் பலிகளில் மேன்மையான பலியாகிய சர்வாங்க தகனபலி எப்படி கொடுவரவேண்டும், பலியிடும் முறைகளை கற்றுக்கொண்டு, நம் வாழ்வை எப்படி தேவனுக்கு சுகந்த வாசனையாய் மாற்றமுடியும் என்பதை எப்பகுதில் நாம் தியானிக்கலாம்.",
            createdAt: "2021-06-22T17:12:08.741Z",
            updatedAt: "2021-06-22T17:12:08.741Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T4_P6.pdf?alt=media",
            },
          },
          {
            _id: "60d219e82ff4c9383426074e",
            isActive: true,
            isDeleted: false,
            name: "சர்வாங்க தகனபலி- 6 / Burnt Offering- 6",
            youtubeLink: "https://www.youtube.com/embed/R6dWjIh8q2k",
            description:
              "தேவனுக்கு கொடுக்கப்படும் பலிகளில் மேன்மையான பலியாகிய சர்வாங்க தகனபலி எப்படி கொடுவரவேண்டும், பலியிடும் முறைகளை கற்றுக்கொண்டு, நம் வாழ்வை எப்படி தேவனுக்கு சுகந்த வாசனையாய் மாற்றமுடியும் என்பதை எப்பகுதில் நாம் தியானிக்கலாம்.",
            createdAt: "2021-06-22T17:12:08.926Z",
            updatedAt: "2021-06-22T17:12:08.926Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T4_P7.pdf?alt=media",
            },
          },
          {
            _id: "60d219e92ff4c9383426074f",
            isActive: true,
            isDeleted: false,
            name: "சர்வாங்க தகனபலி- 7 / Burnt Offering- 7",
            youtubeLink: "https://www.youtube.com/embed/x7xed4_jvZc",
            description:
              "தேவனுக்கு கொடுக்கப்படும் பலிகளில் மேன்மையான பலியாகிய சர்வாங்க தகனபலி எப்படி கொடுவரவேண்டும், பலியிடும் முறைகளை கற்றுக்கொண்டு, நம் வாழ்வை எப்படி தேவனுக்கு சுகந்த வாசனையாய் மாற்றமுடியும் என்பதை எப்பகுதில் நாம் தியானிக்கலாம்.",
            createdAt: "2021-06-22T17:12:09.130Z",
            updatedAt: "2021-06-22T17:12:09.130Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T4_P8.pdf?alt=media",
            },
          },
        ],
        name: "பலிகள் / Offerings",
        description:
          "ஆசரிப்பு கூடாரத்தில் ஆசிரியர்களும் ஜனங்களும் என்னென்ன பலிகள் கொடுக்க வேண்டும், கொண்டு வரவேண்டிய பலிபொருட்கள், அது எப்படி பலியிட்டால் தேவனுக்கு சுகந்த வாசனையாய் மாறும் என்பதை எப்பகுதில் நாம் தியானிக்கலாம்.",
        createdAt: "2021-06-22T17:12:09.367Z",
        updatedAt: "2021-06-22T17:12:09.367Z",
        createdBy: "",
        updatedBy: "",
        __v: 0,
      },
      {
        _id: "60d2183a2ff4c93834260747",
        isActive: true,
        isDeleted: false,
        subTopics: [
          {
            _id: "60d218382ff4c93834260741",
            isActive: true,
            isDeleted: false,
            name: "ஏபோத் -1 /  Ephod - 1",
            youtubeLink: "https://www.youtube.com/embed/yuOleTJGaqw",
            description:
              "ஆசாரியனின் உடையாகிய ஏபோத்தையும், அதின் ஒவ்வொரு நூல்களும் என்ன ஆவிக்குரிய அர்த்தங்கள் உடையதாய் இருக்கிறது என்பதை இப்பகுதில் நாம் தியானிக்கலாம்.",
            createdAt: "2021-06-22T17:04:56.951Z",
            updatedAt: "2021-06-22T17:04:56.951Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T3_P1.pdf?alt=media",
            },
          },
          {
            _id: "60d218392ff4c93834260742",
            isActive: true,
            isDeleted: false,
            name: "ஏபோத் - 2 / Ephod - 2",
            youtubeLink: "https://www.youtube.com/embed/8kGmQtGKGBw",
            description:
              "ஆசாரியனின் உடையாகிய ஏபோத்தையும், அதின் ஒவ்வொரு நூல்களும் என்ன ஆவிக்குரிய அர்த்தங்கள் உடையதாய் இருக்கிறது என்பதை இப்பகுதில் நாம் தியானிக்கலாம்.",
            createdAt: "2021-06-22T17:04:57.280Z",
            updatedAt: "2021-06-22T17:04:57.281Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T3_P2.pdf?alt=media",
            },
          },
          {
            _id: "60d218392ff4c93834260743",
            isActive: true,
            isDeleted: false,
            name: "மார்ப்பதக்கம் / Breastplate",
            youtubeLink: "https://www.youtube.com/embed/rxNH8a0_vT4",
            description:
              "ஆசாரியனின் உடையாகிய மார்ப்பதக்கம் மற்றும் அதில் காணப்படும் முத்துக்களின் ஆவிக்குரிய இரகசியத்தையும் இப்பகுதில் நாம் தியானிக்கலாம்.",
            createdAt: "2021-06-22T17:04:57.632Z",
            updatedAt: "2021-06-22T17:04:57.632Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T3_P3.pdf?alt=media",
            },
          },
          {
            _id: "60d218392ff4c93834260744",
            isActive: true,
            isDeleted: false,
            name: "அங்கி /  Robe",
            youtubeLink: "https://www.youtube.com/embed/6O4sQfF5e4o",
            description:
              "ஆசாரியன் உடுத்தியிருக்கும் அங்கி எப்படி உருவாக்கப்படுகிறது அதின் ஆவிக்குரிய சத்தியம் என்ன என்பதை இப்பகுதில் நாம் தியானிக்கலாம்.",
            createdAt: "2021-06-22T17:04:57.977Z",
            updatedAt: "2021-06-22T17:04:57.977Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T3_P4.pdf?alt=media",
            },
          },
          {
            _id: "60d2183a2ff4c93834260745",
            isActive: true,
            isDeleted: false,
            name: "பாகை / Turban",
            youtubeLink: "https://www.youtube.com/embed/zAc3w3spe6E",
            description:
              "ஆசாரியனின் தலையில் வைக்கப்பட்டிருக்கும் பாகை எப்படி உருவாக்கப்பட்டது என்பதை இப்பகுதில் நாம் தியானிக்கலாம்.",
            createdAt: "2021-06-22T17:04:58.270Z",
            updatedAt: "2021-06-22T17:04:58.270Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T3_P5.pdf?alt=media",
            },
          },
          {
            _id: "60d2183a2ff4c93834260746",
            isActive: true,
            isDeleted: false,
            name: "உள்சட்டை / Undergarments",
            youtubeLink: "https://www.youtube.com/embed/vlK3MCePToA",
            description:
              "ஆசாரியன் எப்படிப்பட்ட உள்சட்டை (உள்ளாடை) உடுத்தவேண்டும், அதன் ஆவிக்குரிய அர்த்தம் என்ன என்பதை இப்பகுதில் நாம் தியானிக்கலாம்.",
            createdAt: "2021-06-22T17:04:58.613Z",
            updatedAt: "2021-06-22T17:04:58.614Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil:
                "https://firebasestorage.googleapis.com/v0/b/spiritual-truth-study-backend.appspot.com/o/T3_P6.pdf?alt=media",
            },
          },
        ],
        name: "ஆசாரியனின் உடை / Dress Of Priest",
        description:
          "ஆசரிப்பு கூடாரத்தில் ஊழியம் செய்யும் ஆசாரியனாகிய ஆரோனின் உடை எப்படி உருவாக்க வேண்டும், எப்படி உடுத்த வேண்டும் என்பதையும், அதன்மூலம் நம்முடைய ஆவிக்குரிய ஜீவியத்தில் நாம் எப்படி வாழவேண்டும் என்பதையும் தியானிக்கலாம்.",
        createdAt: "2021-06-22T17:04:58.833Z",
        updatedAt: "2021-06-22T17:04:58.833Z",
        createdBy: "",
        updatedBy: "",
        __v: 0,
      },
      {
        _id: "60d2170c2ff4c93834260740",
        isActive: true,
        isDeleted: false,
        subTopics: [
          {
            _id: "60d217022ff4c9383426073a",
            isActive: true,
            isDeleted: false,
            name: "உடன்படிக்கைப்பெட்டி / Ark Of Covenant",
            youtubeLink: "https://www.youtube.com/embed/kXN9EF1hzK4",
            description:
              "உடன்படிக்கை பெட்டி எப்படி உருவாக்கப்பட்டது அறிந்து அதை நம்முடைய ஆவிக்குரிய ஜீவியத்தில் செயல்படுத்தும் முறையயை தியானிக்கலாம்.",
            createdAt: "2021-06-22T16:59:46.591Z",
            updatedAt: "2021-06-22T16:59:46.591Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil: "",
            },
          },
          {
            _id: "60d217042ff4c9383426073b",
            isActive: true,
            isDeleted: false,
            name: "கேருபீன்கள் / Cherubium",
            youtubeLink: "https://www.youtube.com/embed/1zKJUrkF4WM",
            description:
              "உடன்படிக்கை பெட்டியின் மீது வைக்கப்பட்டிருக்கும் 2 கேருபீன்கள் மூலம் வெளிப்படும் ஆவிக்குரிய சத்தியத்தை தியானிக்கலாம்.",
            createdAt: "2021-06-22T16:59:48.064Z",
            updatedAt: "2021-06-22T16:59:48.064Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil: "",
            },
          },
          {
            _id: "60d217052ff4c9383426073c",
            isActive: true,
            isDeleted: false,
            name: "உடன்படிக்கை வாழ்க்கை / Covenant Life",
            youtubeLink: "https://www.youtube.com/embed/Ql7F9mrfb7A",
            description:
              "நம்முடைய வாழ்க்கை தேவனோடு எப்படி உடன்படிக்கையில் நிலைத்திருக்க முடியும் என்பதை இப்பகுதியில் தியானிக்கலாம்.",
            createdAt: "2021-06-22T16:59:49.232Z",
            updatedAt: "2021-06-22T16:59:49.232Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil: "",
            },
          },
          {
            _id: "60d217082ff4c9383426073d",
            isActive: true,
            isDeleted: false,
            name: "மன்னா / Manna",
            youtubeLink: "https://www.youtube.com/embed/OaMeBbZTlBE",
            description:
              "இஸ்ரவேல் ஜனங்களுக்கு ஒவ்வொருநாளும் உணவாக கொடுக்கப்பட்ட மன்னா, மற்றும் அது உடன்படிக்கை பெட்டியில் ஏன் வைக்கப்பட்டது என்பதை இப்பகுதியில் தியானிக்கலாம்.",
            createdAt: "2021-06-22T16:59:52.165Z",
            updatedAt: "2021-06-22T16:59:52.165Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil: "",
            },
          },
          {
            _id: "60d217092ff4c9383426073e",
            isActive: true,
            isDeleted: false,
            name: "தளிர்த்த கோல் / Sprouting Rod",
            youtubeLink: "https://www.youtube.com/embed/gFNHeJPc7bI",
            description:
              "ஆரோனின் ஆசாரிய ஊழிய அழைப்பின் அடையாளமாய் தளிர்த்த கோல் எப்படி மாறினதையும், நாமும் அழைக்கப்பட்டவர்களாய் எப்படி வாழமுடியும் என்பதை இப்பகுதியில் தியானிக்கலாம்.",
            createdAt: "2021-06-22T16:59:53.908Z",
            updatedAt: "2021-06-22T16:59:53.908Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil: "",
            },
          },
          {
            _id: "60d2170b2ff4c9383426073f",
            isActive: true,
            isDeleted: false,
            name: "கற்பலகைகள் / Stone Tablets",
            youtubeLink: "https://www.youtube.com/embed/x7eo3rkKVLA",
            description:
              "தேவன் மோசேயின் மூலமாய் இஸ்ரவேல் ஜனங்களுக்கு எழுதி கொடுத்த கற்பலகைகள் மூலம் தேவனுக்கு பிரியமான வாழ்வை எப்படி உருவாக்கமுடியும் என்பதை இப்பகுதியில் தியானிக்கலாம்.",
            createdAt: "2021-06-22T16:59:55.251Z",
            updatedAt: "2021-06-22T16:59:55.251Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil: "",
            },
          },
        ],
        name: "உடன்படிக்கைப்பெட்டி / Ark Of Covenant",
        description:
          "ஆசரிப்பு கூடாரத்தின் மகா பரிசுத்த ஸ்தலத்தில் காணப்படும் உடன்படிக்கைப்பெட்டியின் ஒவ்வொரு பகுதியிலும் காணப்படும் ஆவிக்குரிய சத்தியத்தையும், அதிலிருந்து தேவன் பேசின விதத்தையும் கற்றுக்கொண்டு, தேவா உறவை பெருகுவதை இப்பகுதியில் தியானிக்கலாம்.",
        createdAt: "2021-06-22T16:59:56.121Z",
        updatedAt: "2021-06-22T16:59:56.121Z",
        createdBy: "",
        updatedBy: "",
        __v: 0,
      },
      {
        _id: "60d2145a2ff4c93834260739",
        isActive: true,
        isDeleted: false,
        subTopics: [
          {
            _id: "60d214562ff4c93834260734",
            isActive: true,
            isDeleted: false,
            name: "குத்துவிளக்கு / Lampstand",
            youtubeLink: "https://www.youtube.com/embed/P5zOcuf51V8",
            description:
              "ஆசரிப்பு கூடாரத்தில் எப்பொழுதும் வெளிச்சம் இருக்கவேண்டும். அதற்காக பொன் குத்துவிளக்கை உருவாக்கும்படி தேவன் மோசேயிடம் கட்டளையிட்டார். அந்த குத்துவிளக்கு உருவாக்கப்பட்ட விதமும் அதின் ஒவ்வொரு பகுதிகளும் எப்படி நம்முடைய ஆவிக்குரிய ஜீவியத்திற்கு உதவியாய் இருக்கிறதை கற்றுக்கொள்ளலாம்.",
            createdAt: "2021-06-22T16:48:22.253Z",
            updatedAt: "2021-06-22T16:48:22.253Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil: "",
            },
          },
          {
            _id: "60d214572ff4c93834260735",
            isActive: true,
            isDeleted: false,
            name: "சமுகத்தப்பங்கள் / Showbread",
            youtubeLink: "https://www.youtube.com/embed/4nDay283fCc",
            description:
              "தேவசமுகத்தில் நித்தமும் சமுகத்தப்பங்கள் வைக்கப்படுகிறது. அந்த அப்பங்கள் உருவாக்கப்படுகிற முறையிலும், மேஜையில் அடுக்கப்படுகிற விதத்திலிருமிருந்து நாம் அறியவேண்டிய ஆவிக்குரிய சத்தியத்தை இப்பகுதில் காணலாம்.",
            createdAt: "2021-06-22T16:48:23.314Z",
            updatedAt: "2021-06-22T16:48:23.314Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil: "",
            },
          },
          {
            _id: "60d214582ff4c93834260736",
            isActive: true,
            isDeleted: false,
            name: "தூபபீடம் / Incense Altar",
            youtubeLink: "https://www.youtube.com/embed/r-YOyccaOic",
            description:
              "ஆசரிப்பு கூடாரத்தில் வைக்கப்பட்டிருக்கும் தூபபீடம் மூலம் நாம் அறியவேண்டிய ஆவிக்குரிய சத்தியத்தை இப்பகுதில் காணலாம். ",
            createdAt: "2021-06-22T16:48:24.153Z",
            updatedAt: "2021-06-22T16:48:24.153Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil: "",
            },
          },
          {
            _id: "60d214582ff4c93834260737",
            isActive: true,
            isDeleted: false,
            name: "தூபவர்க்கம் / Incenses",
            youtubeLink: "https://www.youtube.com/embed/Fe2cDMjzyKE",
            description:
              "ஆசரிப்பு கூடாரத்தில் ஆராதனைக்காக பயன்படுத்தப்படும் தூபவர்க்கம் எப்படி உருவாக்கப்படுகிறது என்பதையும், அதன்மூலம் நாம் அறியவேண்டிய ஆவிக்குரிய சத்தியத்தை இப்பகுதில் காணலாம்.",
            createdAt: "2021-06-22T16:48:24.707Z",
            updatedAt: "2021-06-22T16:48:24.707Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil: "",
            },
          },
          {
            _id: "60d214592ff4c93834260738",
            isActive: true,
            isDeleted: false,
            name: "தூபம் / Incense",
            youtubeLink: "https://www.youtube.com/embed/5N6sMHnBUj8",
            description:
              "ஆசரிப்பு கூடாரத்தில் ஆராதனைக்கு அடையாளமாய், ஜெபத்திற்கு அடையாளமாய் விளங்கும் தூபம் பயன்படுகிற விதத்தையும், அதன்மூலம் நாம் அறியவேண்டிய ஆவிக்குரிய சத்தியத்தை இப்பகுதில் காணலாம்.",
            createdAt: "2021-06-22T16:48:25.399Z",
            updatedAt: "2021-06-22T16:48:25.399Z",
            createdBy: "",
            updatedBy: "",
            __v: 0,
            notesLink: {
              tamil: "",
            },
          },
        ],
        name: "ஆசரிப்பு கூடாரம் / Tabernacle",
        description:
          "ஆசரிப்பு கூடாரத்தில் பரிசுத்தஸ்தலத்தில் ஆராதனை செய்வதற்காக பயன்படுத்தப்பட்ட ஒவ்வொரு பொருட்களையும், அதின் ஆவிக்குரிய சத்தியத்தையும், அதை எப்படி நம்முடைய வாழ்க்கையில் செயல்படுத்த முடியும் என்று இந்த வேதப்பாட ஆராச்சி பகுதில் காணமுடியும்.",
        createdAt: "2021-06-22T16:48:26.188Z",
        updatedAt: "2021-06-22T16:48:26.188Z",
        createdBy: "",
        updatedBy: "",
        __v: 0,
      },
    ];

    // this.topicService.getTopicById(this.id).subscribe(
    //   (res) => {
    // console.log("res", res);
    this.topicObj = topicsList.filter((ele) => {
      return ele._id === this.id;
    })[0];
    // this.topicObj = res;
    let imgList = this.getImageList();

    this.topicObj.subTopics.forEach((topic, i) => {
      console.log("topic", topic);
      topic.img = imgList[i];
    });
    console.log("this.topicObj.subTopics", this.topicObj.subTopics);
    this.isLoading = false;
    // }
    // ,
    //   (err) => {
    //     console.log("err", err);
    //   }
    // // );
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
  downloadNotes(subTopic, url) {
    window.open(url, "_blank");
    // this.ngxLoaderService.start(subTopic._id);
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
    } else if (this.topicObj && this.topicObj.name.includes("போஜனபலி")) {
      console.log("inside.................");

      this.topicObj.subTopics.forEach((ele, i) => {
        imgList.push(
          "../../../assets/img/topics/topic5/Grain Offering 0" +
            (i + 1) +
            ".jpg"
        );
      });
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
    } else if (
      this.topicObj &&
      this.topicObj.name.includes("குற்றநிவாரண பலி")
    ) {
      console.log("inside.................");
      this.topicObj.subTopics.forEach((ele, i) => {
        imgList.push(
          "../../../assets/img/topics/topic8/Trespass Offering 0" +
            (i + 1) +
            ".jpg"
        );
      });
    } else if (
      this.topicObj &&
      this.topicObj.name.includes("இஸ்ரவேல் கோத்திரங்கள்")
    ) {
      console.log("inside.................");
      this.topicObj.subTopics.forEach((ele, i) => {
        imgList.push(
          "../../../assets/img/topics/topic9/Tribes 0" + (i + 1) + ".jpg"
        );
      });
    }
    return imgList;
  }
}
