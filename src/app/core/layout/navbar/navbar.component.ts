import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  // toggle: boolean = false;
  itemMenu: any[] = ["home", "profilo", "formazione", "esperienze", "competenze", "contatti"];

  // isToggle(){
  //   this.toggle = !this.toggle;
  // }
}
