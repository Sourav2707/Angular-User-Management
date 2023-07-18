import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-user-management';
  constructor(private dialog : MatDialog) {}
  openAddUserForm() {
    this.dialog.open(AddUserComponent);
  }
}
