import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataMateriasService implements InMemoryDbService {
  createDb(){
    const materias = [
      { codigo: "22.04", nombre: "Algebra Lineal"},
      { codigo: "21.04", nombre: "Mátematica I"},
      { codigo: "42.04", nombre: "Quimica I"},
      { codigo: "22.04", nombre: "Formación general I"},
      { codigo: "22.06", nombre: "Formación general II"},
    ]
    return {materias};
  }
}
