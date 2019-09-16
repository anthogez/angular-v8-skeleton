import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './modules/routing.module';
import { MaterialModule } from './modules/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestService } from './shared/services/rest/rest.service';
import { ManageComponentService } from './shared/services/manage-component/manage-component.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [RestService, ManageComponentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
