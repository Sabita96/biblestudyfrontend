import { Injectable } from "@angular/core";
import { HttpService } from "../http-service/http.service";
// import { getStorage, ref, getDownloadURL } from "firebase/storage";

@Injectable({
  providedIn: "root",
})
export class DownloadService {
  constructor(private httpService: HttpService) {}
  downloadPdf(url) {
    return this.httpService.get(
      url,

      { responseType: "arraybuffer" }
    );
  }

  downloadImage(imageUrl: string) {
    return this.httpService.get(imageUrl, { responseType: "blob" });
    // return this.httpService.get(imageUrl, {observe: 'response', responseType: 'blob'})
  }
  // downloadImage(img) {

  //   return this.httpService.get(
  //     img,null

  //     // { responseType: "arraybuffer" }
  //   );

  // }
}
