import { Component } from '@angular/core';
import {animationAnimation} from "../../../shared/animation/animation.module";

@Component({
  selector: 'app-competenze',
  templateUrl: './competenze.component.html',
  styleUrls: ['./competenze.component.scss'],
  animations: [animationAnimation]
})
export class CompetenzeComponent {

  frontendSkills: any[] = [
    {
      name: "HTML",
      logo: "/assets/img-skill/HTML5.svg.png",
    },
    {
      name: 'CSS',
      logo: "/assets/img-skill/CSS.svg.png",
    },
    {
      name: 'JavaScript',
      logo: "/assets/img-skill/JavaScript.png",
    },
    {
      name: 'TypeScript',
      logo: '/assets/img-skill/typescript.png',
    },
    {
      name: 'Angular',
      logo: '/assets/img-skill/angular.png',
    }
  ]

  backendSkills: any[] = [
    {
      name: 'Java',
      logo: '/assets/img-skill/java.png',
    },
    {
      name: 'SpringBoot',
      logo: '/assets/img-skill/springboot.png',
    },
    {
      name: 'Postman',
      logo: '/assets/img-skill/postman.png',
    },
    {
      name: 'PostgreSQL',
      logo: '/assets/img-skill/PostgreSQL.wine.png',
    },
    {
      name: 'Git',
      logo: '/assets/img-skill/git.png',
    }
  ]
}
