import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Cool ☕️ pics';
  image1 = 'http://images6.fanpop.com/image/photos/39000000/-Coffee-coffee-39019611-2048-2048.jpg';
  image2 = 'https://i.pinimg.com/originals/87/92/0a/87920a56c8566fd76dc3405f12cc441d.jpg';
  image3 = 'https://weirdomatic.com/wp-content/pictures/2018/05/weird-coffee-810x540.jpeg';

  constructor() { }

  ngOnInit() {
  }

}