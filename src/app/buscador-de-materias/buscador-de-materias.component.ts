import { Component, OnInit, ValueProvider } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { pipe } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import {FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';

import { debounceTime, multicast, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Materia } from '../materia';
import { MateriasService } from '../materias.service'
import { MatTableDataSource} from '@angular/material/table';
 
@Component({
  selector: 'app-buscador-de-materias',
  templateUrl: './buscador-de-materias.component.html',
  styleUrls: ['./buscador-de-materias.component.css']
})
export class BuscadorDeMateriasComponent implements OnInit {
  options: Observable<Materia[]>;
  filteredOptions: Observable<Materia[]>;
  searchValue: string;
  myControl = new FormControl();

  constructor(private materiasService: MateriasService) { }

  ngOnInit() {
    this.options = this.materiasService.getMaterias();

    this.myControl.valueChanges.subscribe(
      val => this.updateWrittenValue(val)
    );

    this.filteredOptions = this.getFilteredValues();
  }
  private updateWrittenValue(value){
    this.searchValue = value.toLowerCase();
    this.filteredOptions = this.getFilteredValues();
  }
  private getFilteredValues(): Observable<Materia[]> {
    return this.options.pipe(
      map(
        (options : Materia[]) => options.filter((option: Materia) => option.search.includes(this.searchValue))
      )
    );

    // return this.options.map(projects => {
    //   let fl = projects.filter(proj => proj.name === name);
    //   return (fl.length > 0) ? fl[0] : null;
    // });
  }
}
