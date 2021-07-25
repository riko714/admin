import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesendComponent } from './salesend/salesend.component';

import { MatTableModule } from '@angular/material/table' ;

@NgModule({
  declarations: [
    SalesendComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],

  exports: [
    CommonModule,
    SalesendComponent
  ]
})
export class SalesModule { }
