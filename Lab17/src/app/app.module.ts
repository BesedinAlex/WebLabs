import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ContactsComponent} from './contacts/contacts.component';
import {HeaderComponent} from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {AddContactComponent} from './add-contact/add-contact.component';
import {EditContactComponent} from './edit-contact/edit-contact.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FilterPipe} from './pipes/filter.pipe';
import {TextMaskModule} from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    AddContactComponent,
    EditContactComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
