import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, of as observableOf, Subscription} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {DataTableService} from "./service/data-table.service";
import {HeaderConfigContainer} from "./model/header-config-container";
import {MatTable} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {HeaderConfig} from "./model/header-config";
import {OpenDialog} from "../../openDialog";
import {EmitEditProperty} from "./model/emitEdit";


export interface UserData {
  id: string;
  foodPrice: string;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, AfterViewInit {
  _headerConfigUrl: string;
  rowId: number;
  @Input() set headerConfigUrl(headerConfig: string) {
    this._headerConfigUrl = headerConfig;
  }
  _baseUrl: string;
  @Input() set baseUrl(url) {
    this._baseUrl = url;
    this.getTableData();
  }

  _defaultSort: string;
  @Input() set defaultSort(sortName) {
    this._defaultSort = sortName;
  }
  @Output() sendRemoveItemId: EventEmitter<number> = new EventEmitter<number>();
  @Output() showEditSlide: EventEmitter<EmitEditProperty> = new EventEmitter<EmitEditProperty>();
  @Output() showAddSlide: EventEmitter<boolean> = new EventEmitter<boolean>();
  headerConfig: HeaderConfig[];
  headerField: string[];
  data: any[] = [];

  tableLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  subscription: Subscription = new Subscription();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable, {static: true}) table: MatTable<any>

  constructor(
    private dataTable: DataTableService,
    private openDialog: OpenDialog
  ) {
  }

  ngOnInit() {
    this.getHeaderConfigResponse();
  }

  /**
   * Get Header Configuration
   */
  getHeaderConfigResponse() {
    this.subscription.add(this.dataTable.getHeaderConfig(this._headerConfigUrl).subscribe(
      (headerConfig: HeaderConfigContainer) => {
        this.headerConfig = headerConfig.headerConfig;
        this.headerField = headerConfig.headerConfig.map(items => items.field);
      }
    ));
  }

  ngAfterViewInit() {
    this.getTableData();
    this.paginator.showFirstLastButtons = true;
  }
  getTableData() {
    // If the user changes the sort order, reset back to the first page.
    // this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    this.subscription.add(
    merge( this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.dataTable.getDataTableItems(
            // this.sort.active,
            // this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize,
            this._baseUrl
          ).pipe(catchError(() => observableOf(null)));
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data.Items === null) {
            return [];
          }

          // Only refresh the result length if there is new data. In case of rate
          // limit errors, we do not want to reset the paginator to zero, as that
          // would prevent users from re-triggering requests.
          this.tableLength = data.TotalCount;
          return data.Items;
        }),
      )
      .subscribe((data:any) => { 
        this.data = data;        
      })
    )
  }

  addRowData() {
    this.showAddSlide.emit(true);
    this.subscription.add(this.dataTable.isAddOrEditeSubject.subscribe(
      (isEdited) => {
        if (isEdited) {
          this.getTableData();
        }
      }
    ))
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDeleteRowItem(id: number) {
    this.rowId = id;
    const title = 'آیا از حذف اطمینان دارید؟';
    const description = 'در صورت حذف محتو دیگر به آن دسترسی نخواهید داشت'
    this.subscription.add(this.openDialog.openDialog(
      {
        width: '50vw',
        title:title,
        description: description,
        confirmTitle:'حذف',
        cancelTitle:'لغو',
        isConfirm:''
      }).subscribe(
      (isConfirm) => {
        if(isConfirm) {
          this.sendRemoveItemId.emit(this.rowId);
          setTimeout(() => {
            this.getTableData();
          }, 50);
        }
      }
    ))
  }

  onEditRowItem(foodId: number) {
    const foodProperty: EmitEditProperty = {isShow: true , foodId: foodId};
    this.showEditSlide.emit(foodProperty);
    this.subscription.add(this.dataTable.isAddOrEditeSubject.subscribe(
      (isEdited) => {
        if (isEdited) {
          this.getTableData();
        }
      }
    ))
  }

  showFilter() {  
    var x = document.getElementById("datatable-filters");
      if (x.style.display === "block") {
      x.style.display = "none";
      } else {
       x.style.display = "block";
    }
  }
}

export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();

  customPaginatorIntl.itemsPerPageLabel = 'تعداد هر آیتم در صفحه';

  return customPaginatorIntl;
}
