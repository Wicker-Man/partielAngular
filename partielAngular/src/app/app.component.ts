import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'partielAngular';
}

export class StatistiqueComponent {
  pays: string;
  nouveauxCas: number

  constructor() {
    this.pays = "France";
    this.nouveauxCas = 353648;
  }

}