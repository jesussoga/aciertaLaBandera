import {Component, OnInit} from '@angular/core';
import {MenuItem, PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  public menu: MenuItem[] | undefined;


  ngOnInit() {
    this.menu = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        routerLink: 'preguntas/home'
      },
      {
        label: 'Banderas',
        icon: PrimeIcons.FLAG,
        routerLink: 'preguntas/banderas'
      },
      {
        label: 'Capitales',
        icon: PrimeIcons.GLOBE,
        routerLink: 'preguntas/capitales'
      },
      {
        separator: true
      },
      {
        label: 'Configuración',
        disabled: true,
        icon: 'pi pi-fw pi-cog'
      }
    ];
  }
}

