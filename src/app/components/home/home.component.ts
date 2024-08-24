import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; 
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSnackBarModule,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private snack:MatSnackBar){}
btnClick()
{
console.log("Button clicked");
this.snack.open("hey welcome to this app","cancel");
}
}

