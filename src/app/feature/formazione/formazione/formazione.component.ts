import { Component } from '@angular/core';

@Component({
  selector: 'app-formazione',
  templateUrl: './formazione.component.html',
  styleUrls: ['./formazione.component.scss']
})
export class FormazioneComponent {
  formationMenu = [
    {
      titolo: 'Full Stack Developer - Formazione Retribuita',
      luogo: 'Unikey',
      data: 'Giugno 2023 - Ottobre 2023',
      info: 'Durante il mio periodo di formazione ho acquisito competenze in diverse aree: \n' +
        'DataBase: Approfondimento di concetti per la gestione di dati attraverso l’utilizzo di DataBase Relazionali, in particolar modo di PostgreSQL.\n' +
        'Back End: Acquisizione di fondamenti del linguaggio Java, utili per riuscire a lavorare successivamente attraverso il Framework Spring SpringBoot.\n' +
        'Implementazione di sistema ThreeLayer per la gestione e creazione di web application, attraverso strumenti quali: SpringDataJPA Lombok Mapstruct Swagger e Postman\n' +
        'Front End: Acquisizione di conoscenza e manualità dei principali linguaggi Front End, in particolar modo di TypeScript utilizzato per poter lavorare in Angular.\n' +
        'Ho sviluppato attraverso Angular applicativi completi in Single Page Application, rendendo il contenuto dinamico grazie all’utilizzo di moduli e componenti, \n' +
        'con l’aggiunta dello stile tramite SCSS e con l’implementazione di librerie esterne quali Bootstrap, Angular Material e Primeng.'
    },
    {
      titolo: 'Junior .NET Developer',
      luogo: 'Generation Italy',
      data: 'Ottobre 2022 - Febbraio 2023',
      info: 'Durante il corso ho appreso competenze riguardo le basi di programmazione ad oggetti e programmazione in C#, HTML, CSS, JavaScript e sul framework .NET. \n' +
        'Tramite laboratori esperienziali ho acquisito e messo in pratica le seguenti Soft Skills: Team-Work (Scrum), Proattività, Comunicazione, Mentalità di crescita, \n' +
        'Adattabilità e Apprendimento continuo.'
    },
    {
      titolo: 'Tecnico Superiore per il sistema qualità di prodotti e processi a base biotecnologica',
      luogo: 'Istituto Tecnico Superiore per le Nuove Tecnologie della Vita, Roma',
      data: '2018 - 2021',
      info: 'Ho acquisite le competenze come: \n' +
  'Good Laboratory Practice (GLP) applicate ai controlli di qualità chimico e microbiologico e nella produzione, \n' +
  'Good manufacturing Practice (GMP) – Annex 1 (standard mondiali) con la capacità di operare nell’assicurazione di qualità di ogni processo. \n' +
  'Sono in grado di operare e assicurare la corretta registrazione, gestione delle attività «Data integrity» e implementazione di processi e impianti a base farmaceutica.'

},
    {
      titolo: 'Diploma di maturità scientifica',
      luogo: 'Liceo Scientifico Cartesio, Roma',
      data: '2016',
      info:  'Diploma di maturità scientifica'
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
