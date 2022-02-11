import { NgModule } from '@angular/core';
import { FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormControl } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    // BrowserModule,
    // AppRoutingModule,
    // FormsModule,
    // BrowserAnimationsModule,
    // MatFormFieldModule,
    // MatToolbarModule,
    // ReactiveFormsModule,
    // MatCheckboxModule,
    // MatInputModule,
    // MatButtonModule,
    // MatRadioModule,
    // MatIconModule,
    // MatRadioModule,
    // MatCardModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    MatRadioModule,
    MatCardModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
