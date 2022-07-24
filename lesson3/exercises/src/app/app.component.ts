import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = !this.takeOffEnabled;
    }
  }

  handleLanding(rocketImage) {
    window.alert('The shuttle is landing.  Landing gear engaged.');
    this.color = 'green';
    this.height = 0;
    this.message = 'The shuttle has landed.';
    rocketImage.style.bottom = '0px';
  }

  handleAbortMission(rocketImage) {
    let result = window.confirm('Are you sure you want to abort the mission?');
    if (result) {
      this.message = 'Mission Aborted.';
      this.color = 'red';
      this.height = 0;
      rocketImage.style.bottom = '0px';
    }
  }

  moveRocket(rocketImage, direction: string) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
      this.warning();
    } else if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
      this.warning();
    } else if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
      this.warning();
    } else if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
      this.warning();   
    }
  }

  warning() {
    if (this.height >= 320000 || this.width >= 370000 || this.height <= 10000 || this.width <= 8000) {
      this.color = 'orange';
      this.message = 'Almost out of bounds!';
    } else {
      this.color = 'green';
      this.message = 'Shuttle in flight';
    }
  }
}
