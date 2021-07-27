import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { SaleService } from 'src/app/services/sale.service';

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
  public itemSale: any = [];
  public dataSource: any;
  @ViewChild(MatPaginator ) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  displayedColumns: string[] = ['CategoryEN','Barcode','Brand', 'DESC_EN1','Regular_Price','SalePrice','BeginDate', 'EndDate', 'ItemQty', 'TotalPrice', 'On_hand'];

  
  

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
    // this.saleService.getlistSales().subscribe(data => {
    //   console.log(data);
    //   this.listSales = data;
    // });   
    this.loadData();
  };
  



  loadData(){
    return this.saleService.getlistSales().subscribe(data => {
      console.log(data);
      this.itemSale = data;
      this.dataSource = new MatTableDataSource(this.itemSale);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
      // console.log(this.dataSource);
      console.log(this.paginator);
      console.log(this.sort);

     
      
    } );
  }



  

};