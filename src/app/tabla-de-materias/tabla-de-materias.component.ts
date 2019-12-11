import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  code : number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {code: 22.05, name: 'Física I'},
  {code: 44.23, name: 'Matematica I'},
  {code: 11.42, name: 'Algebra Lineal'},
  {code: 54.12, name: 'Quimica I'},

];

@Component({
  selector: 'app-tabla-de-materias',
  templateUrl: './tabla-de-materias.component.html',
  styleUrls: ['./tabla-de-materias.component.css']
})
export class TablaDeMateriasComponent implements OnInit {
  displayedColumns: string[] = ['name', 'code'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
