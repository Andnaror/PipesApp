import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public menuItems: MenuItem[]=[]

  ngOnInit(){
    this.menuItems=[
      {
        label:'Pipes de Angular',
        icon:'pi pi-desktop',
        items:[
          {
            label: 'textos y fechas',
            icon:'pi pi-aling-left',
            routerLink:'/'
          },
          {
            label: 'números',
            icon:'pi pi-dollar',
            routerLink:'numbers'
          },
          {
            label: 'No comunes',
            icon:'pi pi-globe',
            routerLink:'uncommon'
          },
        ],
      },
      {
        label:'Pipes personalizados',
        icon:'pi pi-fw pi-cog',
        items:[
          {
            label: 'otro elemento',
            icon:'pi pi-cog',
            routerLink:'#'
          },
        ]
      },
     ]
  }
}
