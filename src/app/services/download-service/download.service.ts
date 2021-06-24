import { Injectable } from "@angular/core";
import { HttpService } from "app/http.service";

@Injectable({
  providedIn: "root",
})
export class DownloadService {
  constructor(private httpService: HttpService) {}
  downloadNotes(subTopic) {
    console.log("inside...............", subTopic.name);

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
