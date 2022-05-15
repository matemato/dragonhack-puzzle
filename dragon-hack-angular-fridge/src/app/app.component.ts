import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FridgeService} from "./services/fridge.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private router: Router, private service: FridgeService) {
  }

  title = 'dragon-hack-angular-fridge';
  items = [
    {label: 'My Fridge', icon: 'pi pi-fw pi-building', disabled: false},
    {label: 'My Recipes', icon: 'pi pi-fw pi-calendar', disabled: true},
    {label: 'Statistics', icon: 'pi pi-fw pi-chart-line', disabled: false},

  ];
  activeItem = this.items[0];

  tabChange(event: any) {
    console.log(event.activeItem.label)
    switch (event.activeItem.label){
      case 'My Fridge': {
        this.router.navigateByUrl('/my-fridge')
        break;
      }
      case 'Statistics': {
        this.router.navigateByUrl('/statistics')
        break;
      }
    }



  }

  ngOnInit(): void {
    this.service.currentTab.subscribe(res => {
      if(res ==='My Recipes') {
        console.log('notr')
        this.activeItem=this.items[1];
        this.router.navigateByUrl('/my-recipes');
      }
    })
  }
}

