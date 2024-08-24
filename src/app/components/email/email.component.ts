import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { EmailService } from '../../Service/email.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-email',
  standalone: true,
  imports: [
   
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatProgressSpinnerModule,
    CommonModule
  ],
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent 
{
  data = {
    to: "",
    subject: "",
    message: ""
  }

  flag=false;

  constructor(private email: EmailService, private snackBar: MatSnackBar) {}

  doSubmit() {
    if (this.data.to === '' || this.data.subject === '' || this.data.message === '') {
      this.snackBar.open("Fields cannot be empty !!", "OK");
      return;
    }
    this.flag=true;
    this.email.sendEmail(this.data).subscribe(
      response => {
        console.log('Email sent successfully:', response);
        this.snackBar.open("Email sent successfully!", "OK");
        this.flag=false;
      },
      error => {
        console.error('Error sending email:', error);
        this.snackBar.open("Error sending email!", "OK");
        this.flag=false;
      }
    );
  }
}
