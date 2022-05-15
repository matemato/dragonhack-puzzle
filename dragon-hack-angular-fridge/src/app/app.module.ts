import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TabMenuModule} from "primeng/tabmenu";
import { MyFridgeComponent } from './features/my-fridge/my-fridge.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {ListboxModule} from "primeng/listbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";
import {ButtonModule} from "primeng/button";
import { DeleteDialogComponent } from './features/delete-dialog/delete-dialog.component';
import {DialogModule} from "primeng/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AddEditDialogComponent } from './features/add-edit-dialog/add-edit-dialog.component';
import {CalendarModule} from "primeng/calendar";
import {InputTextModule} from "primeng/inputtext";
import { FileUploadComponent } from './file-upload/file-upload.component';
import {MessageModule} from "primeng/message";
import {ToggleButtonModule} from "primeng/togglebutton";
import {SelectButtonModule} from "primeng/selectbutton";
import { DatePipe } from '@angular/common';
import {FileUploadModule} from "primeng/fileupload";

@NgModule({
  declarations: [
    AppComponent,
    MyFridgeComponent,
    DeleteDialogComponent,
    AddEditDialogComponent,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabMenuModule,
    HttpClientModule,
    CommonModule,
    ListboxModule,
    FormsModule,
    RippleModule,
    ButtonModule,
    DialogModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextModule,
    MessageModule,
    ToggleButtonModule,
    SelectButtonModule,
    FileUploadModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
