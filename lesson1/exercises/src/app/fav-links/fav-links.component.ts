import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  linksTitle = '👇Radical Links👇';
  links = ['https://cat-bounce.com/','https://theuselessweb.site/ducksarethebest.com/', 'https://www.mapcrunch.com/']

  constructor() { }

  ngOnInit() {
  }

}
