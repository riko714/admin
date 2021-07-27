import { Component, OnInit, ViewChild } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-jjlist-producs',
  templateUrl: './jjlist-producs.component.html',
  styleUrls: ['./jjlist-producs.component.scss']
})
export class JjlistProducsComponent implements OnInit {


  listSales : any;
  public itemSale: any = [];
  public dataSource: any;
  @ViewChild(MatPaginator ) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  displayedColumns: string[] = ['Item', 'Description','Pack', 'Gross Price', 'Disc#','PLU','UnitCost','Regular_Price','SalePrice','On_hand','Sold7Days', 'Sold30Days','QTYSold',
  'LastSold_date','VendorID','ReceivedDate', 'ReceivedQty','SoldSinceLastReceived','totalWaste', 'Last_Wasted','Aisle'];

  
  

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.saleService.getlistSales().subscribe(data => {
    //   console.log(data);
    //   this.listSales = data;
    // });   
    this.loadData();
  };
  



  loadData(){
    return this.dataService.getlistJJproducts().subscribe(data => {
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



  
}
