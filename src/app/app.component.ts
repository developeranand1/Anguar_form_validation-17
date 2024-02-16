import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userForm!:FormGroup;

  constructor(private fb:FormBuilder){

  }

  ngOnInit(){
    this.userdetails();
  }


  userdetails(){
    this.userForm = this.fb.group({ // Initialize the form group with form controls and validation rules
      name: ['', Validators.required], // Name field is required
      email: ['', [Validators.required, Validators.email]], // Email field is required and must be a valid email format
      phone: ['', Validators.required], // Phone field is required
      address: ['', Validators.required], // Address field is required
      state:['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]], // Pincode field is required and must be a 6-digit number
      password: ['', [Validators.required, Validators.minLength(6)]], // Password field is required and must have a minimum length of 6 characters
      confirmPassword: ['', Validators.required] // Confirm Password field is required
    });
  }


  onRegister(){
     if (this.userForm.valid) { // Check if the form is valid
      // Implement your registration logic here
      console.log(this.userForm.value); // For example, you can log the form values to the console
    } else {
      // Handle form validation errors
      // You can display error messages or perform other actions based on validation errors
    }
  }
}
