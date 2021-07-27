import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JjlistProducsComponent } from './jjlist-producs/jjlist-producs.component';



import { MatTableModule } from '@angular/material/table' ;
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';



@NgModule({
  declarations: [
    JjlistProducsComponent
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
    JjlistProducsComponent
  ]

})
export class JjproducsModule { }
