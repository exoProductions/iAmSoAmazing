import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UploadComponent
  ],
  imports: [
    CommonModule,   
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule, 
  ]
})
export class UploadModule { }
