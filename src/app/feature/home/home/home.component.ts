import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  presentationsItems: string[] = ["Java Developer", "Angular Developer", "Spring Boot Developer", "Full Stack Developer"];
  currentIndex = 0;

  cv: string = "assets/home/cv.pdf";

  linkedinLink: string = "https://www.linkedin.com";
  emailLink: string = "mailto:mail@email.com";
  githubLink: string = "https://github.com";

  ngOnInit() {
    const interval$ = interval(2500);

    interval$
      .pipe(
        map(() => (this.currentIndex = (this.currentIndex + 1) % this.presentationsItems.length))
      )
      .subscribe();
  }

  download() {
    window.open(this.cv, "_blank");
  }
}
