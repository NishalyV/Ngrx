import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shopppingItem } from './store/model/shopping-item.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private shoppingUrl = "http://localhost:3000/shopping";

  constructor(private http: HttpClient) { }

  getShoppingItems() {
    return this.http.get<shopppingItem>(this.shoppingUrl);
  }

  addShoppingItems(shoppingname: shopppingItem) {
    return this.http.post(this.shoppingUrl, shoppingname);
  }

  deleteShoppingItem(id: string) {
    return this.http.delete(`${this.shoppingUrl}/${id}`);
  }
  postFile(fileToUpload: File): Observable<object> {
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http
      .post(`${this.shoppingUrl}/upload`, formData);
  }

}
