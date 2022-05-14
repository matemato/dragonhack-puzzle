import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from "../../models/item";

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  @Input()show = false;
  @Input() ingredient! : Item;
  @Output()response = new EventEmitter<boolean>();


  ngOnInit(): void {
  }

}
