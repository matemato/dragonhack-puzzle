import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dragon-hack-angular-fridge';
  items = [
    {label: 'My Fridge', icon: 'pi pi-fw pi-building'},
    {label: 'My Recipes', icon: 'pi pi-fw pi-calendar'},

  ];
}

