import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  @Input() s!: statistique;

  constructor() {
    this.s = new statistique;





  }



  ngOnInit(): void {
  }

}
