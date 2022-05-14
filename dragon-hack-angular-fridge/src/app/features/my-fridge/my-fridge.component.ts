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
  ingredients: Item[] = [];
  selectedIngredients: any[] = [];


  showClosedFridge = true;
  showOpenFridge = false;

  selectedIngredient: any;

  deleteDialogOpen = false;

  addEditDialogOpen = false;
  isEdit = false;


  constructor(private fridgeService: FridgeService) {
  }

  ngOnInit(): void {
    this.checkMobile();
    this.getAllItems();
  }

  toggleFridge() {
    this.showClosedFridge = !this.showClosedFridge;
    this.showOpenFridge = !this.showOpenFridge;
  }

  checkMobile() {
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  openDialog(item: Item | null, openDelete: boolean,$event: Event,isEdit = false) {
    $event.stopPropagation()
    this.selectedIngredient = item;
    console.log(this.selectedIngredient)
    this.isEdit = isEdit;
    openDelete ? this.deleteDialogOpen = true : this.addEditDialogOpen = true;
  }

  closeDeleteDialog(event: any) {
    if(event) {
      this.fridgeService.delete(this.selectedIngredient.ITEM_ID).subscribe(()=> {
        this.getAllItems();
      })
    }
    this.deleteDialogOpen = false;

  }

  getAllItems() {
    this.fridgeService.getAll().subscribe(res => {
      this.ingredients = res;
      console.log(this.ingredients)
    })
  }

  closeAddEditDialog($event: Item | null) {
    if (!this.isEdit) {
      this.fridgeService.store($event).subscribe(()=>{
        this.getAllItems()
      })
    } else {
      this.fridgeService.update($event).subscribe(()=>{
        this.getAllItems()
      })
    }
    this.addEditDialogOpen = false;
  }
}
