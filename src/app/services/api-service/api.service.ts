import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { SharedEnvironment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(url: string, param: any): Observable<any> {
    return this.http.get(`${SharedEnvironment.apiUrl}` + url, {
      params: param,
    });
  }

  post(url: string, body: Object | Array<Object>): Observable<any> {
    console.log(
      "`${SharedEnvironment.apiUrl}` + url",
      `${SharedEnvironment.apiUrl}` + url
    );

    return this.http.post(`${SharedEnvironment.apiUrl}` + url, body);
  }

  put(url: string, body: Object | Array<Object>): Observable<any> {
    return this.http.put(`${SharedEnvironment.apiUrl}` + url, body);
  }
  patch(url: string, body: Object | Array<Object>): Observable<any> {
    return this.http.patch(`${SharedEnvironment.apiUrl}` + url, body);
  }

  delete(url: string, options: any): Observable<any> {
    return this.http.delete(url, options);
  }
  getWithObserve(url: string, param: any): Observable<any> {
    return this.http.get(`${SharedEnvironment.apiUrl}` + url, {
      observe: "response",
      responseType: "text",
    });
  }
}
