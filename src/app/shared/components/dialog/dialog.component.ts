import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogEmitService} from "./service/dialog-emit.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private dialogEmit: DialogEmitService
  ) { }

  ngOnInit(): void {
  }

  onYesClick() {
    this.dialogRef.close(true);
    this.dialogEmit.dialogActionButtonSubject.next(true);
  }

  onNoClick() {
    this.dialogRef.close(false);
    this.dialogEmit.dialogActionButtonSubject.next(false);
  }
}
