import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(url: string, param: any): Observable<any> {
    return this.http.get(url, { params: param });
  }

  post(url: string, body: Object | Array<Object>): Observable<any> {
    return this.http.post(url, body);
  }

  put(url: string, body: Object | Array<Object>): Observable<any> {
    return this.http.put(url, body);
  }
  patch(url: string, body: Object | Array<Object>): Observable<any> {
    return this.http.patch(url, body);
  }

  delete(url: string, options: any): Observable<any> {
    return this.http.delete(url, options);
  }
  getWithObserve(url: string, param: any): Observable<any> {
    return this.http.get(url, { observe: "response", responseType: "text" });
  }
}
