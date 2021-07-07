import { Injectable } from "@angular/core";
import { SharedEnvironment } from "environments/environment";
import { map } from "rxjs/operators";
import { ApiService } from "../api-service/api.service";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  constructor(private apiService: ApiService) {}

  sendMail(mailObj) {
    return this.apiService
      .post(`${SharedEnvironment.apiUrl}` + "mail/send", mailObj)
      .pipe(
        map((res: any) => {
          // return [{}];
          return res;
        })
      );
  }
}
