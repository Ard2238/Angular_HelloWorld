// app.module.ts -- Indicating  this is a typescript file. Essentially provides strong type checking


// Importing core modules of Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Whenever CLI is used to separate new components and services, it
// will automatically update this file to import and add them here.
import { AppComponent } from './app.component';

// NgModule:  decorator ~~ annotations
// Decorator: to provide additional metadata to specify 
// the Components, the Services, the Imports, etc.. 
// Used while processing, instantiation and runtime.
@NgModule({

  // Components are added here. Essentially the classes that has views.
  declarations: [
    AppComponent
  ],

  // Imports needed for application
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  // Services like http
  providers: [],

  // Root component which has the main view of the application
  bootstrap: [AppComponent]
})
export class AppModule { }
