import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultPackage = "advanced";
  user = {
    email: '',
    packages: '',
    password: ''
  };


      submitted= false;


//  this.signupForm.form.patchValue({
//     userData: {
//       email:
//     }
//   });



  onSubmit(){
    console.log(this.signupForm.value);
    // this.submitted = true;
    // this.user.email = this.signupForm.value.userData.email;
    // this.user.password = this.signupForm.value.userData.password;
    // this.user.packages = this.signupForm.value.userData.package;


    this.signupForm.reset();
  }

}
