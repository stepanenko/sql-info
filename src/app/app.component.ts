import { Component } from '@angular/core';
import { FavChangedInfo } from './favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true
  };

  viewMode = 'map';

  onFavoriteChange(newEvent: FavChangedInfo) {
    this.post.isFavorite = !this.post.isFavorite;
    console.log('Favorite changed to: ', newEvent.newValue);
  }

}
