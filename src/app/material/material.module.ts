import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule
 } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  declarations: []
})
export class MaterialModule { }
