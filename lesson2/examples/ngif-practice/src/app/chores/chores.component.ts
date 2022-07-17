import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['call mom'];
   finishedChores = ['feed cat', 'make bed', 'start laundry', 'vacuum', 'sweep'];

   targetImage = 'https://i.ytimg.com/vi/J12xfCTcdxM/maxresdefault.jpg';

   constructor() { }

   ngOnInit() {
   }

}
