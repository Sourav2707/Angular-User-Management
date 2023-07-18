import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../service/user.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userForm: FormGroup;
  education: string[] = [
    'Matric',
    'Diploma',
    'Itermediate',
    'Graduate',
    'PostGraduate'
  ];
  constructor(private fb : FormBuilder, private userService: UserService, private dialogRef: DialogRef<AddUserComponent>) {
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
      this.userService.addUser(this.userForm.value).subscribe({
      next: (val : any) => {
        alert('User added successfully');
        this.dialogRef.close();
      },
      error: (err) => {
        console.error(err)
      }})
    }
  }
}

