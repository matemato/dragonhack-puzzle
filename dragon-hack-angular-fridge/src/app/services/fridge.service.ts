import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {environment} from "../../environments/environment";
import { Item } from "../models/item"

@Injectable({
  providedIn: 'root'
})
export class FridgeService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }

  store(item: Item) {
    console.log(item);
    return this.http.post(`${this.baseUrl}/store`, { data: item })
      .pipe(
        map((res: any) => {
          return res['data'];
        })
      );
  }

  update(item: Item) {
    return this.http.put(`${this.baseUrl}/update`, { data: item });
  }

  delete(id: any) {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/delete`, { params: params });
  }
}


