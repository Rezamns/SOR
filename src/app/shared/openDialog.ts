import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "./components/dialog/dialog.component";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class OpenDialog {
  constructor(private dialog: MatDialog) {
  }

  openDialog(
    {
      title = '',
      description = '',
      confirmTitle = '',
      cancelTitle = '',
      width = '30vw',
      panelClass = '',
      isConfirm
    }) {
    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass: panelClass,
      width: width,
      data: {
        title: title,
        description: description,
        noButton: cancelTitle,
        yesButton: confirmTitle,
        isConfirm: isConfirm
      }
    })
    return dialogRef.afterClosed();
  }
}
