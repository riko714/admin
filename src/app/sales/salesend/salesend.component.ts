import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SaleService } from 'src/app/services/sale.service';
import {AfterViewInit,  ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import { MatSort, Sort } from '@angular/material/sort';
@Component({
  selector: 'app-salesend',
  templateUrl: './salesend.component.html',
  styleUrls: ['./salesend.component.scss']
})






export class SalesendComponent implements OnInit {

  listSales : any;
  
  
  displayedColumns: string[] = ['CategoryEN','Barcode','Brand', 'DESC_EN1','Regular_Price','SalePrice','BeginDate', 'EndDate', 'ItemQty', 'TotalPrice', 'On_hand'];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {

    this.saleService.getlistSales().subscribe(data => {
      console.log(data);
      this.listSales = data;
    }      
    ); 
    

  };

  

  ngAfterViewInit() {
    
  }


}


export interface PeriodicElement {
  CategoryEN: string;
  Barcode: number;
  Brand: number;
  DESC_EN1: string;
  Regular_Price: number;
  SalePrice: number;
  BeginDate: string;
  EndDate: string;
  ItemQty: number;
  TotalPrice: number;
  On_hand: number;
};

var ELEMENT_DATA: PeriodicElement[]