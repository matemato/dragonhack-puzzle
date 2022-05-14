import { Component, OnInit } from '@angular/core';
import {FridgeService} from "../../services/fridge.service";
import {Item} from "../../models/item";

@Component({
  selector: 'app-my-fridge',
  templateUrl: './my-fridge.component.html',
  styleUrls: ['./my-fridge.component.scss']
})
export class MyFridgeComponent implements OnInit {

  showClosedFridge = true;
  showOpenFridge = false;

  item : Item = {
    experationDate: new Date(),
    name: 'banana',
    id: 5
  }

  constructor(private fridgeService: FridgeService) { }

  ngOnInit(): void {
    this.fridgeService.store(this.item).subscribe()
    this.fridgeService.getAll().subscribe(res => console.log(res))
  }

  toggleFridge() {
    this.showClosedFridge = !this.showClosedFridge;
    this.showOpenFridge = !this.showOpenFridge;
  }

}
