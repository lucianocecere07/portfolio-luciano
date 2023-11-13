import { Component } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss']
})
export class DarkModeComponent {
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
