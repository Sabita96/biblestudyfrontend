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
  // loadMore(): void {

  //   if (this.getNextItems()) {
  //     this.productsSubject.next(this.products);
  //   }
  // }

  // getNextItems(): boolean {
  //   console.log('filter',);

  //   if (this.products.length >= this.allProducts.length) {
  //     return false;
  //   }
  //   console.log('this.allProducts',this.allProducts);
  //   // this.allProducts = this.getSortedProducts()
  //   const remainingLength = Math.min(15, this.allProducts.length - this.products.length);
  //   this.products.push(...this.allProducts.slice(this.products.length, this.products.length + remainingLength));
  //   console.log('this.products',this.products);

  //   return true;
  // }
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
