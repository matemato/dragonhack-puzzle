import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Item} from "../../models/item";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-edit-dialog',
  templateUrl: './add-edit-dialog.component.html',
  styleUrls: ['./add-edit-dialog.component.scss']
})
export class AddEditDialogComponent implements OnInit {

  @Input() show = false;
  @Input() isEdit = false;
  @Input() ingredient! : Item ;
  @Output()response = new EventEmitter<Item | null>();

  minDate = new Date()

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'ingredient': {
           if(this.isEdit && this.ingredient) {
             this.setData();
           }
          }
        }
      }
    }
  }


  public form: FormGroup = new FormGroup({
    name: new FormControl('', {validators: [Validators.required]}),
    expiryDate: new FormControl('', Validators.required),
  });




  ngOnInit(): void {
  }

  validateForm() {
    this.form.markAllAsTouched();
    if(this.form.valid) {
      const newItem = new Item(this.form.value.expiryDate, this.form.value.name, this.ingredient ? this.ingredient.ITEM_ID : null)
      this.response.emit(newItem)
      this.form.reset();
    }
  }

  private setData() {
    this.form.controls['name'].setValue(this.ingredient.NAME);
    this.form.controls['expiryDate'].setValue(new Date(this.ingredient.EXPERATIONDATE));
  }
}
