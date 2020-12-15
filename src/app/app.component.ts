import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World';
  imgUrl = "";
  url = "";
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void{
    this.title = "Hello From Bridgelabz";

    // Property-Binding: path to the property represented by the variable imgUrl
    this.imgUrl = "../assets/logo-2.png"

    // For Event Binding
    this.url = "https://www.google.com";
  }

  onClick($event){
    console.log("Image Clicked", $event);
    // _blank: opens in a new tab
    window.open(this.url, "_blank");
  }

  onInput($event){
    console.log("Change Event Occurred ", $event.data);
    const nameRegex = RegExp('^[A-Z][a-zA-Z\\s]{2,}$');
    // const spChars = RegExp('^[!&@]$');
    // if(spChars.test($event.data)){
    //   this.userName = this.userName.substring(0, this.userName.length-1);
    //   console.log("Special Event Occurred: ", this.userName);
    // }
    if(nameRegex.test(this.userName)){
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect !!";
  }
}
