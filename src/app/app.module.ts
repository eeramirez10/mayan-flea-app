import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';

import { MatTableModule } from '@angular/material/table';

import { HttpClientModule } from "@angular/common/http";


import { MatIconModule } from '@angular/material/icon';
import { VentasComponent } from './components/ventas/ventas.component';

import { HighchartsChartModule } from "highcharts-angular";
import { BasicLineComponent } from './components/basic-line/basic-line.component';
import { ColumnComponent } from './components/column/column.component';
//Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    VentasComponent,
    BasicLineComponent,
    ColumnComponent,
    ToolBarComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    HttpClientModule,
    MatIconModule,
    HighchartsChartModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
