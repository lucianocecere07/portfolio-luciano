import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-formation-experience-card',
  templateUrl: './formation-experience-card.component.html',
  styleUrls: ['./formation-experience-card.component.scss']
})
export class FormationExperienceCardComponent {
  @Input() nomeAttivita: string = '';
  @Input() luogoAttivita: string = '';
  @Input() dataSvolgimento: string = '';
}
