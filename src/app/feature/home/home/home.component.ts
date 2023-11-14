import { Component } from '@angular/core';
import {animationAnimation} from "../../../shared/animation/animation.module";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [animationAnimation]
})
export class HomeComponent {
  presentationsItems: string[] = ["Java Developer", "Angular Developer", "Spring Boot Developer", "Full Stack Developer"];

  cv: string = "assets/home/cv.pdf";

  linkedinLink: string = "https://www.linkedin.com";
  emailLink: string = "mailto:mail@email.com";
  githubLink: string = "https://github.com";

  download() {
    window.open(this.cv, "_blank");
  }
}
