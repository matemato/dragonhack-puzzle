import {Component, HostListener, OnInit} from '@angular/core';
import {FridgeService} from "../../services/fridge.service";
import {Item} from "../../models/item";
import {ListboxModule} from 'primeng/listbox';

@Component({
  selector: 'app-my-fridge',
  templateUrl: './my-fridge.component.html',
  styleUrls: ['./my-fridge.component.scss']
})
export class MyFridgeComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkMobile()
  }
  isMobile = false;
  ingredients: Item[];


  selectedCountries: any[] = [];
  showClosedFridge = true;
  showOpenFridge = false;

  item: Item = {
    experationDate: new Date(),
    name: 'banana',
    id: 5
  }

  constructor(private fridgeService: FridgeService) {
    this.ingredients = [
      {name: "Banana", experationDate: new Date()},
      {name: "OatMeal", experationDate: new Date()},
      {name: "Milk", experationDate: new Date()},
      {name: "Puding", experationDate: new Date()},
      {name: "Fuckery", experationDate: new Date()},
    ];
  }

  ngOnInit(): void {
    this.checkMobile()
    this.fridgeService.store(this.item).subscribe()
    this.fridgeService.getAll().subscribe(res => console.log(res))
  }

  toggleFridge() {
    this.showClosedFridge = !this.showClosedFridge;
    this.showOpenFridge = !this.showOpenFridge;
  }

  checkMobile() {
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
}
