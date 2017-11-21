import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = '<strong>CHINONSO ENWEREM</strong> FULL STACK DEVELOPER';

  toggleDropDown() {
    let x = document.getElementById("navBar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }

  closeDropDown() {
    let x = document.getElementById("navBar");
    if (x.className !== "topnav") {
      x.className = "topnav";
    }
  }
}
