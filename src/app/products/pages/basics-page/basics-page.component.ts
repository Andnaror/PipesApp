import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string='andree';
  public nameUpper: string='ANDREE';
  public fullName: string='aNDREe nArVaEz';
  public customDate:Date=new Date();
}
