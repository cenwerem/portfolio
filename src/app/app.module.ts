import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { AboutComponent }   from './about/about.component';
import { WorksComponent }   from './works/works.component';
import { ContactComponent }   from './contact/contact.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    WorksComponent,
    ContactComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
