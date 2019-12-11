import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, multicast, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Materia } from '../materia';
import { MateriasService } from '../materias.service'

@Component({
  selector: 'app-buscador-de-materias',
  templateUrl: './buscador-de-materias.component.html',
  styleUrls: ['./buscador-de-materias.component.css']
})
export class BuscadorDeMateriasComponent implements OnInit {
  materias$: Observable<Materia[]>;
  private searchTerms = new Subject<String>();

  constructor(private materiasService: MateriasService) { }

  ngOnInit() {
    this.materias$ = this.searchTerms.pipe(
      debounceTime(10),
      distinctUntilChanged(),
      switchMap((term: string) => this.materiasService.buscarMaterias(term))
    )
  }
  search(term: string): void {
    this.searchTerms.next(term);
  }

}
