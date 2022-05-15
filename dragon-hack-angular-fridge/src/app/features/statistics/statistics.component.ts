import { Component, OnInit } from '@angular/core';
import {FridgeService} from "../../services/fridge.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(private service: FridgeService) { }

  ngOnInit(): void {
    this.service.getStats().subscribe(res => console.log(res))
  }

}
