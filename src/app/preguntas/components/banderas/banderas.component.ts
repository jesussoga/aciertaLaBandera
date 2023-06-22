import {Component, OnInit} from '@angular/core';
import {PreguntaBandera} from "../../../shared/models/pregunta-bandera.model";
import {PaisesService} from "../../../shared/services/paises.service";
import {Pais} from "../../../shared/models/pais.model";

@Component({
  selector: 'app-banderas',
  templateUrl: './banderas.component.html',
  styleUrls: ['./banderas.component.css']
})
export class BanderasComponent implements OnInit{

  public mostrarDialogo!: boolean;
  public mostrarReinicio!: boolean;
  public tiempo!: number;
  public pregunta!: PreguntaBandera | null;
  public puntos!: number;
  public cargandoPaises!: boolean;
  public intervalo: any;

  constructor(private paisesService: PaisesService) {
  }

  ngOnInit(): void {
    this.mostrarDialogo = true;
    this.mostrarReinicio = false;
    this.puntos = 0;
    this.paisesService.obtenerTodosLosPaises().subscribe(
      {
        next: (datos:Pais[]) => {
          console.log("Ya tengo la lista de paises", datos);
          this.paisesService.paises = datos;
        },
        error: (error) => {
          console.error(error);
        }
      }
    );
  }

  public empezar() {
    this.mostrarDialogo = false;
    this.pregunta = this.paisesService.obtenerPreguntaBandera();
    clearInterval(this.intervalo);
    this.controlarTiempo();
    this.mostrarReinicio = true;
  }

  public comprobarAcierto(nombre: string){
    if(nombre == this.pregunta?.respuesta){
      this.puntos += 40;
    } else {
      this.puntos -= 20;
    }
    this.empezar();
  }

  public controlarTiempo(){
    this.tiempo = 15;
    this.intervalo = setInterval(
      () :void =>{
        if (this.tiempo > 0){
          this.tiempo--;
        } else {
          clearInterval(this.intervalo);
        }
      }, 1000);
  }

  public reiniciarJuego(){
    clearInterval(this.intervalo);
    this.puntos = 0;
    this.mostrarReinicio = false;
    this.empezar();
  }
}
