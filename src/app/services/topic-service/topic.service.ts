import { Injectable } from "@angular/core";
import { SharedEnvironment } from "environments/environment";
import { map } from "rxjs/operators";
import { ApiService } from "../api-service/api.service";
@Injectable({
  providedIn: "root",
})
export class TopicService {
  topics: any = [];

  constructor(private apiService: ApiService) {}

  getTopics() {
    return this.apiService
      .get(`${SharedEnvironment.apiUrl}` + "topic", null)
      .pipe(
        map((res: any) => {
          // return [{}];
          return res.data;
        })
      );
  }

  getTopicById(id) {
    return this.apiService
      .get(`${SharedEnvironment.apiUrl}` + "topic/" + id, null)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
}
