import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppendPipe } from './pipes/append.pipe';
import { AppendCLIPipe } from './pipes/append-cli.pipe';
import { SummaryPipe } from './pipes/summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppendPipe,
    AppendCLIPipe,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
