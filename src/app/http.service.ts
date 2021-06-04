import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getPdf(url) {
    let headers = new HttpHeaders();
    headers = headers.set("Accept", "application/pdf");
    return this.http.get(url, {
      headers: headers,
      responseType: "blob" as "json",
    });
    // let headers = new HttpHeaders();
    // headers = headers.set("Accept", "application/pdf");
    // return this.http.get(url, { headers: headers, responseType: "blob" });
  }
}
