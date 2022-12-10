import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  images = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  getTrandingGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApiKey}&limit=50`)
    .subscribe((response: any) => {
      this.images.next(response.data);
    });
  }

  getTrandingStickers() {
    return this.http.get(`https://api.giphy.com/v1/stickers/trending?api_key=${environment.giphyApiKey}&limit=50`)
    .subscribe((response: any) => {
      this.images.next(response.data);
    });
  }

  searchGifs(searchTerm: string) {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${environment.giphyApiKey}&limit=50`)
    .subscribe((response: any) => {
      this.images.next(response.data);
    });
  }

  searchStickers(searchTerm: string) {
    return this.http.get(`https://api.giphy.com/v1/stickers/search?q=${searchTerm}&api_key=${environment.giphyApiKey}&limit=50`)
    .subscribe((response: any) => {
      this.images.next(response.data);
    });
  }

  getImages() {
    return this.images.asObservable();
  }
}
