import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {environment} from "../../environments/environment";
import { Item } from "../models/item"
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FridgeService {
  currentTab = new BehaviorSubject('My Fridge');

  switchTab(newTab: string){
    this.currentTab.next(newTab);
  }


  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.baseUrl}/list2`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }

  store(item: Item | null) {
    console.log(item);
    return this.http.post(`${this.baseUrl}/store2`, { data: item })
      .pipe(
        map((res: any) => {
          return res['data'];
        })
      );
  }

  update(item: Item | null) {
    return this.http.put(`${this.baseUrl}/update2`, { data: item });
  }

  delete(id: any) {
    const params = new HttpParams()
      .set('ITEM_ID', id.toString());
    return this.http.delete(`${this.baseUrl}/delete2`, { params: params, responseType: 'text' });
  }

  textToIngredients(text: string) : Observable<Object>{
    return this.http.post(`${this.baseUrl}/textToIngredients`, text)
  }

  getRecipes(text: string) {
    return this.http.post(`${this.baseUrl}/recipesByIngredients`, text)
  }

  getFruits() {
    return this.http.get(`${this.baseUrl}/datesOfUse`)
  }

  getStats() {
    return this.http.get(`${this.baseUrl}/displayStatistics`,{responseType: 'text' })
  }

}


