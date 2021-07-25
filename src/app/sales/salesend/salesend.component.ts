import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SaleService } from 'src/app/services/sale.service';
import {AfterViewInit,  ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-salesend',
  templateUrl: './salesend.component.html',
  styleUrls: ['./salesend.component.scss']
})






export class SalesendComponent implements OnInit {

  listSales : any;
  dataSource: any;
  displayedColumns: string[] = ['Barcode','Brand','BeginDate', 'EndDate'];






  
  

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
    this.listSales = this.saleService.listSales().subscribe(data => {
        this.listSales = data;
      }
      
    );
   


  }


}
