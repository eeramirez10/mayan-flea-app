import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor() { }

  ngOnInit() {
  }

  close(reason: string) {
    
    this.sidenav.close();
  }

}
