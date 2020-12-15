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
}
