import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World';
  imgUrl = "";
  ngOnInit(): void{
    this.title = "Hello From Bridgelabz";

    // Property-Binding: path to the property represented by the variable imgUrl
    this.imgUrl = "../assets/logo-2.png"
  }
}
