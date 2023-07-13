import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  image :any;
constructor(private router : Router)
{

}
Login(form:NgForm)
{
  console.log(form)
  console.log(form.value.login)
  const link = ['main']
this.router.navigate(link)

}
handleFileInput(event: any) {
  const file = event.target.files[0]; // Get the selected file

  if (file) {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const base64Image = e.target.result; // Base64-encoded image data
      // You can now use the base64Image as needed (e.g., send it to a server or display it in the UI)
      console.log(base64Image);
      this.image=base64Image;
    };
    
    reader.readAsDataURL(file); // Convert the file to base64
  }
}

}
