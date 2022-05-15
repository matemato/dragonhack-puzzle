import {Component, OnInit} from '@angular/core';
import {FridgeService} from "../../services/fridge.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(private service: FridgeService) { }
  stats : any = [];
  moneySaved: any

  ngOnInit(): void {
    this.getStats();

  }

  private getStats() {
    this.service.getStats().subscribe((res:any) => {
      this.stats = Object.keys(res).map(function(personNamedIndex){
        return res[personNamedIndex];
      });
      this.moneySaved = this.stats.pop();
    })
  }
}
