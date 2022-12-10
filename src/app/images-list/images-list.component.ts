import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';

import { DataService } from '../data.service';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit, OnDestroy {

  images: any[] = [];
  key: string = '';

  subscription: Subscription;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.subscription = Subscription.EMPTY;
  }

  ngOnInit(): void {
    this.route.data
      .subscribe(param => {
        this.key = param['key'];
        if (this.key === 'gif') {
          // if key gif then look for gifs
          this.dataService.getTrandingGifs();
        } else if (this.key === 'sticker') {
          // if key sticker then look for stickers
          this.dataService.getTrandingStickers();
        }
        this.subscription = this.dataService.getImages()
          .subscribe((response: any) => {
            this.images = response;
          })
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  search(searchTerm: string) {
    if (searchTerm !== '') {
      if (this.key === 'gif') {
        this.dataService.searchGifs(searchTerm);
      } else if (this.key === 'sticker') {
        this.dataService.searchStickers(searchTerm);
      }
    }
  }
}
