import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18nSelect
  public name:string='Andree';
  public gender:'male' | 'female'='male';

  public invitationMap={
    male:'invitarlo',
    female:'invitarla'
  }

  public changeClient():void{
    this.name='Melissa';
    this.gender='female'
  }

  //i18nPlural
  public clients:string[]=['Andree', 'Eduard','Jeison', 'Thomas', 'Monica', 'Adriana', 'Esteban']
  public clientsMap = {
    '=0':'no tenemos clientes esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient():void{
    this.clients.shift()
  }

  //KeyValue
  public person={
    name:'Andree',
    age:23,
    address:'Santa Marta'
  }

  //Async
  public myObservableTimer: Observable<number> = interval(1000)
    .pipe(
      tap(value=>console.log('tap', value))
    );

  public promiseValue:Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('tenemos data en la promesa.');
    },3500);
  })
}
