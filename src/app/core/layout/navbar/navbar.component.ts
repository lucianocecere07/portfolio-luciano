import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  itemMenu: any[] = ["home", "profilo", "formazione", "esperienze", "competenze", "contatti"];

  isChecked = false;

  toggleDarkMode(event: any): void {
    const checked = event.target.checked;
    if (checked) {
      document.body.classList.add('dark-mode');
      this.isChecked = true;
    } else {
      document.body.classList.remove('dark-mode');
      this.isChecked = false;
    }
  }
}
