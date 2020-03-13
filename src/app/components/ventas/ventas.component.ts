import { Component, OnInit } from '@angular/core';
import { MayanFleaService } from '../../mayan-flea.service';



@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  displayedColumns: string[] = ['tienda', 'almacen', 'tickets', 'piezas', 'importe', 'pza', 'tkt'];
  dataSource;
  date:Date = new Date()

  constructor(private mfs: MayanFleaService) {
    this.loadData()
    setInterval(()=>{
      this.loadData()
    },10000)

  }

  ngOnInit(): void {
  }

  loadData(){
    this.mfs.getData(this.date.getDate(), this.date.getMonth() + 1, this.date.getFullYear()).subscribe(data => {
      this.dataSource = data;
      console.log(data)
    }) 
  }

}

