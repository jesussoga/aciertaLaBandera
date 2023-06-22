import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Pais} from "../models/pais.model";
import {HttpClient} from "@angular/common/http";
import {PreguntaBandera} from "../models/pregunta-bandera.model";

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _paises!: Pais[];

  constructor(private httpClient: HttpClient) {}

  public obtenerTodosLosPaises(): Observable<Pais[]>{
    return this.httpClient.get<Pais[]>("https:restcountries.com/v3.1/all");
  }


  get paises(): Pais[] {
    return this._paises;
  }

  set paises(value: Pais[]) {
    this._paises = value;
  }

  public obtenerPreguntaBandera(): PreguntaBandera | null{
    if (this.paises.length == 0){
      return null;
    }
    let pais: Pais = this.paisAleatorio();
    let opcionesDesordenadas: string[] = [
      this.paisAleatorio().name.official,
      this.paisAleatorio().name.official,
      this.paisAleatorio().name.official
    ];
    let indice = Math.floor(Math.random()* opcionesDesordenadas.length + 1);
    opcionesDesordenadas.splice( indice, 0, pais.name.official );
    const pregunta: PreguntaBandera = {
      bandera: pais.flags.svg,
      respuesta: pais.name.official,
      desordenadas: opcionesDesordenadas
    };
    return pregunta;
  }

  public paisAleatorio(): Pais{
    let indice: number = Math.floor(Math.random() * this.paises.length);
    return this.paises[indice];
  }


}
