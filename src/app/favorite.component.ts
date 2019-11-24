
import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface FavChangedInfo {
  newValue: boolean;
}

@Component({
  selector: 'favorite',
  templateUrl: 'favorite.component.html'
})
export class FavoriteComponent {
  @Input() isFavorite: boolean;
  @Output() changed = new EventEmitter();

  onStarClick() {
    this.changed.emit({
      newValue: this.isFavorite
    });
  }

}
