import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent  // boota o componente standalone direto aqui, sem declarações
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
