import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AppPage } from '../../../../e2e/src/app.po';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  reason = '';
  cambio: Boolean = true;
  buttonText: String = 'Grafica'
  
  constructor() { }

  ngOnInit() {
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  window() {

    if (this.cambio) {
      this.cambio = false

      this.buttonText = 'Tabla'
    } else {
      this.cambio = true
      this.buttonText = 'Grafica'
    }

  }

}
