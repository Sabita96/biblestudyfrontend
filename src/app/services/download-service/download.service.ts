import { Injectable } from "@angular/core";
import { HttpService } from "app/http.service";
// import { getStorage, ref, getDownloadURL } from "firebase/storage";

@Injectable({
  providedIn: "root",
})
export class DownloadService {
  constructor(private httpService: HttpService) {}
  downloadNotes(subTopic) {
    // const storage = getStorage();
    // getDownloadURL(ref(storage, "images/stars.jpg"))
    //   .then((url) => {
    //     // `url` is the download URL for 'images/stars.jpg'

    //     // This can be downloaded directly:
    //     const xhr = new XMLHttpRequest();
    //     xhr.responseType = "blob";
    //     xhr.onload = (event) => {
    //       const blob = xhr.response;
    //     };
    //     xhr.open("GET", url);
    //     xhr.send();

    //     // Or inserted into an <img> element
    //     const img = document.getElementById("myimg");
    //     img.setAttribute("src", url);
    //   })
    //   .catch((error) => {
    //     // Handle any errors
    //   });
    // // Create a reference with an initial file path and name
    // var storage = firebase.storage();
    // var pathReference = storage.ref("images/stars.jpg");

    // // Create a reference from a Google Cloud Storage URI
    // var gsReference = storage.refFromURL("gs://bucket/images/stars.jpg");

    // Create a reference from an HTTPS URL
    // Note that in the URL, characters are URL escaped!
    // var httpsReference = storage.refFromURL(
    //   "https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg"
    // );

    // console.log("inside...............", subTopic.name);

    // this.externalServicefileLink
    //   .getInvestorAttachments(formID)
    //   .toPromise()
    // //   .then((res: any) => {
    //     if (res.Value.length > 0) {
    //       res.Value.forEach((element) => {
    this.httpService
      .get(
        subTopic.fileLink,

        { responseType: "arraybuffer" }
      )
      .subscribe((response) => {
        console.log("response", response);

        // let ext = element.FilePath.split("/");
        // let exten = ext[ext.length - 1].split(".");
        // console.log(exten);
        // let fileName = element.Name + "." + exten[exten.length - 1];
        // console.log(fileName);
        // console.log("elemnt-----", element);
        let blob = new Blob([response]);
        // const data = Buffer.from(response.).toString("base64");
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", subTopic.name + ".pdf");
        document.body.appendChild(link);
        link.click();
      });
    // .catch((err) => {
    //   console.log(err);
    // });
    //     });
    //   } else {
    //     this.toastr.error("Error While downloading pdf!!!");
    //   }
    // })
  }
}
