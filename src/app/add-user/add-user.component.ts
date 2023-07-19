import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../service/user.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
  userForm: FormGroup;
  education: string[] = [
    'Matric',
    'Diploma',
    'Itermediate',
    'Graduate',
    'PostGraduate'
  ];
  constructor(
    private fb : FormBuilder, 
    private userService: UserService, 
    private dialogRef: MatDialogRef<AddUserComponent>, 
    @Inject(MAT_DIALOG_DATA) public data : any,
    private coreService: CoreService
    ) {
    this.userForm = this.fb.group({
      firstName: '',
      lastName:'',
      email:'',
      dob:'',
      gender:'',
      education:'',
      company:'',
      experience:'',
      package:''
    });
  }
  onFormSubmit() {
    if(this.userForm.valid) {
      if(this.userForm) {
        if(this.data) {
          this.userService.editUser(this.data.id, this.userForm.value).subscribe({
            next: (val : any) => {
              this.coreService.openSnackBar('User updated!', 'OK');
              this.dialogRef.close(true);
            },
            error: (err) => {
              console.error(err)
            }})
        }
        else {
          this.userService.addUser(this.userForm.value).subscribe({
            next: (val : any) => {
              this.coreService.openSnackBar('User added successfully', 'OK');
              this.dialogRef.close(true);
            },
            error: (err) => {
              console.error(err)
            }});
        }
      }
    }
  }
  ngOnInit(): void {
      this.userForm.patchValue(this.data);
  }
}

