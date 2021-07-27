import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesendComponent } from './salesend/salesend.component';

import { MatTableModule } from '@angular/material/table' ;
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [
    SalesendComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule 
  ],

  exports: [
    CommonModule,
    SalesendComponent
  ]
})
export class SalesModule { }
