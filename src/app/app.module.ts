import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/Http';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos.components';
import { TodoService } from './services/todos.service';

@NgModule({
  declarations: [
    AppComponent, TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
