import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  apiUrl = "https://rhcardsortapi.azurewebsites.net/CardSort"
  constructor(private httpClient: HttpClient) { }

  public sortCards(unsortedList: string[]) {
    return this.httpClient.post<string[]>(this.apiUrl, unsortedList);
  }
}
