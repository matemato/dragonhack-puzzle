import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {FridgeService} from "../../services/fridge.service";
import {Item} from "../../models/item";
import {ListboxModule} from 'primeng/listbox';
import {FileUploadService} from "../../file-upload.service";

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
  receiptItems: Item[] = [
    new Item(new Date() ,'vinegar',null),
    new Item(new Date() ,'broccoli',null),
    new Item(new Date() ,'chicken thighs',null),
    new Item(new Date() ,'tomatoes',null),
    new Item(new Date() ,'potatoes',null),
  ]
  isMobile = false;
  ingredients: Item[] = [];
  selectedIngredients: any[] = [];

  datesOfUse : any= [];
  showClosedFridge = true;
  showOpenFridge = false;

  selectedIngredient: any;

  deleteDialogOpen = false;

  addEditDialogOpen = false;
  isEdit = false;

  optimalTemperature: number = 0;
  currentTemperature: number = 2;


  constructor(private fridgeService: FridgeService,private fileUploadService: FileUploadService) {
  }

  ngOnInit(): void {
    this.checkMobile();
    this.getAllItems();
    this.getFruits();
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
    this.isEdit = isEdit;
    this.selectedIngredient = item;
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
      this.ingredients = res.sort((a:any, b:any) => b.EXPERATIONDATE < a.EXPERATIONDATE ? 1: -1);
      this.getSuggestedTemp();
    })
  }

  closeAddEditDialog($event: Item | null) {
    if($event) {
      if (!this.isEdit) {
        this.fridgeService.store($event).subscribe(()=>{
          this.getAllItems()
        })
      } else {
        this.fridgeService.update($event).subscribe(()=>{
          this.getAllItems()
        })
      }
    }
    this.addEditDialogOpen = false;
  }


  file: any;
  onChange($event: any) {
    setTimeout(()=>{
      this.file = $event.target.files[0];
      console.log(this.file)
    },4000)

  }
  loading: boolean = false; // Flag variable
  shortLink: string = "";
  receiptText = "";

  onUpload() {
    this.loading = !this.loading;
    this.fileUploadService.upload(this.file).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {
          // Short link via api response
          this.shortLink = event.link;
          this.loading = false; // Flag variable
          this.getText()
        }
      }
    );
  }

  getText(){
    var myHeaders = new Headers();
    myHeaders.append("apikey", "cRcbOtWZbzOwSyj933D7B8sScfM4pa4Z");
    var raw = this.file;
    var requestOptions: RequestInit = {
      method: 'POST',
      redirect: 'follow',
      headers: myHeaders,
      body: raw
    };
    fetch("https://api.apilayer.com/image_to_text/upload", requestOptions)
      .then(response => response.text())
      .then(result => {
        this.receiptText = result;
        this.receiptText = JSON.parse(this.receiptText)['all_text'].toLowerCase()
        console.log(this.receiptText)
        //this.fridgeService.textToIngredients(this.receiptText).subscribe((res: any) => console.log(res))
        this.receiptItems.forEach(el => {
          this.fridgeService.store(el).subscribe(()=> this.getAllItems())
        })
      })
      .catch(error => {
        this.receiptItems.forEach(el => {
          this.fridgeService.store(el).subscribe(()=> this.getAllItems())
          console.log('error', error)
        })
      });

  }

  getRecipes() {
    this.fridgeService.getRecipes('cheddar,cream cheese').subscribe(res => console.log(res))
    this.fridgeService.switchTab('My Recipes');
  }

  private getFruits() {
    this.fridgeService.getFruits().subscribe(res => {
      this.datesOfUse = res;
      this.datesOfUse = this.datesOfUse.filter((el: any) => el.fridge !== 'not recommended')
    })
  }

  getSuggestedTemp(){
    const optimalTemperatures: any[] = [];
    this.fridgeService.getTemps().subscribe(res=> {
      var json = JSON.parse(res as string)
      this.ingredients.forEach(el => {
          var element = json.find((el2: any) => el2.product == el.NAME);
          if (element != -1) {
            optimalTemperatures.push(element)
          }
        }
      )
      var sum = 0;
      console.log(optimalTemperatures)
      optimalTemperatures.forEach(el => {
        if(el!=undefined) {
          sum = sum + el.optimal_temperature;
        }
      })
      this.optimalTemperature = Math.floor(sum/optimalTemperatures.length);
    })
  }
}
