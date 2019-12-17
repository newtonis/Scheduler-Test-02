import { Component, OnInit } from '@angular/core';
import { Materia } from '../materia';
import { BehaviorSubject } from 'rxjs'

const ELEMENT_DATA: Materia[] = [
];

@Component({
  selector: 'app-tabla-de-materias',
  templateUrl: './tabla-de-materias.component.html',
  styleUrls: ['./tabla-de-materias.component.css']
})
export class TablaDeMateriasComponent implements OnInit {
  displayedColumns: string[] = ['name', 'code'];
  data : Materia[] = [];
  dataSource = new BehaviorSubject<Materia[]>([]);

  constructor() { }

  ngOnInit() {
  }
  private addMateria(materia : Materia){
    console.log("agregando materia ");
    console.log(materia);
    this.data.push(
      {nombre: materia.nombre, codigo: materia.codigo, search: materia.search});
    this.dataSource.next([...this.dataSource.getValue(), materia]);

    console.log(this.dataSource);
  }
  private removeMateria(materia){
  //  delete this.dataSource[this.dataSource.findIndex(item => item.codigo == materia.codigo)]
  }
}
