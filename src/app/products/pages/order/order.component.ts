import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  public isUpperCase:boolean = false;
  public sortBy:keyof Hero | '' ='';

  public heroes:Hero[]=[
    {
    name:'Superman',
    canFly:true,
    color: Color.blue
    },
    {
    name:'Spiderman',
    canFly:false,
    color: Color.red
    },
    {
    name:'Batman',
    canFly:false,
    color: Color.black
    },
    {
    name:'Green Lantern',
    canFly:true,
    color: Color.green
    },
  ]
  toggleUpperCase():void{
    this.isUpperCase=!this.isUpperCase
  }

  changeOrder(value: keyof Hero){
    this.sortBy=value;
  }
}
