import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from '../Service/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})


export class TableDataComponent implements  OnInit {
  displayedColumns: string[] = [];
  isLoadingResults = true;
  dataSource = new MatTableDataSource;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    this.dataService.getData().subscribe(y => {
      console.log(y)
      this.displayedColumns = Object.keys(y[0]);
      this.dataSource = y
      this.dataSource=new MatTableDataSource(y)
      this.dataSource.paginator = this.paginator;
      this.isLoadingResults = false;
    })
  }


  constructor(private dataService: DataService) {

  }



}






