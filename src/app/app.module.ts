import { DatabaseService } from './database.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GuestbookComponent } from './guestbook/guestbook.component';
import { FormbookComponent } from './formbook/formbook.component';
import { ForceWrapPipe } from 'pipes/ForceWrap';

@NgModule({
  declarations: [
    AppComponent,
    GuestbookComponent,
    FormbookComponent,
    ForceWrapPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
