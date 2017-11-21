import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes:Routes = [
  {path:'home', component: HomeComponent},
  {path: 'location', component: LocationComponent},
  {path:'contact', component: ContactComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
