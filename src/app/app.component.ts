import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'event-booking';


  
  isLoginView: boolean = true
  // register obj:any
  registerObj: any = {
    "UserId": 0 ,
    "Name": "string",
    "Email": "string",
    "Password": "string",
    "ContactNo": "string",
    "Role": "string"

  }
  // login obj:any
  loginObj: any = {
    "Password": "string",
    "ContactNo": "string",
  }
  isUserLoggedin: boolean = false;
  loggedUserData:any;

  constructor(private http: HttpClient,private router:Router){
    const localData= localStorage.getItem('user');
    if(localData != null) {
      this.isUserLoggedin =  true;
      this.loggedUserData = JSON.parse(localData);
    }
  }
  openLogin(){
    const model = document.getElementById('myModal')
    if (model != null) {
        model.style.display = 'block';
    }
  }
  closeLogin(){
    const model = document.getElementById('myModal')
    if (model != null) {
        model.style.display = 'none';
    }
  }

  onRegister(){
    console.log("register",this.registerObj);
    this.http.post('https://freeapi.miniprojectideas.com/api/EventBooking/CreateUser',this.registerObj).subscribe((data: any) => {
      console.log("data",data);
      if (data.result) {
        alert(data.message + data.data);
        this.closeLogin();
      }else{
        alert(data.message);
      }
    })

  }
  onLogin(){
    console.log("login",this.loginObj);
    this.http.post('https://freeapi.miniprojectideas.com/api/EventBooking/Login',this.loginObj).subscribe((data: any) => {
      console.log("data",data);
      if (data.result) {
        localStorage.setItem('user',JSON.stringify(data.data));
        alert(data.message);
        this.closeLogin();
      }else{
        alert(data.message);
      }
    })
  }

  onLogoff() {
    console.log("logging off");
    localStorage.removeItem('user');
    this.isUserLoggedin = false;
    this.loggedUserData = undefined;
    this.router.navigateByUrl('/home')
}
}
