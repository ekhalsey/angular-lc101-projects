import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive1: boolean = false;
   inactive2: boolean = false;
   inactive3: boolean = false;
   inactive4: boolean = false;

   constructor() { }

   ngOnInit() { }

   resetInactiveBool () {
      this.inactive1 = false;
      this.inactive2 = false;
      this.inactive3 = false;
   } 
}
