import { Component } from '@angular/core';

@Component({
  selector: 'app-esperienza',
  templateUrl: './esperienza.component.html',
  styleUrls: ['./esperienza.component.scss']
})
export class EsperienzaComponent {
  experienceMenu = [
      {
          titolo: 'Junior Kit Room Specialist',
          luogo: 'Stryker Italia',
          data: '2021 (contratto a tempo determinato)',
          info: 'Controllo visivo di kit medici per interventi chirurgici, richiesta e reintegro degli item mancanti nei kit, archiviazione in magazzino dei prodotti acquistati. \n' +
              'In questa esperienza ho avuto modo di migliorare le mie capacità di collaborazione tra colleghi e l’attenzione al dettaglio nel lavorare con precisione e scrupolosità.'
      },
      {
          titolo: 'Stage di Tecnico di Laboratorio Controllo Qualità',
          luogo: 'BioSint (AlfaSigma Group)',
          data: '2020 - 2021',
          info: 'Esecuzione di analisi microbiologiche e chimiche su prodotto finito, materie prime, semilavorati e utilities di produzione. \n' +
              'In questa esperienza ho imparato come si lavora in gruppo, come si gestiscono le urgenze e il rispetto delle norme.'
      }
  ]

  showModal = false;
  selectedCard: any;

  openModal(item: any) {
      this.showModal = true;
      this.selectedCard = item;
  }

  closeModal() {
      this.showModal = false;
      this.selectedCard = undefined;
  }
}
