import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule
 } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  declarations: []
})
export class MaterialModule { }
