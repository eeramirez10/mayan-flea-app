import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MayanFleaService {

  url: any = 'https://mayanflea-apirest.herokuapp.com';

  constructor(private http: HttpClient) {


  }

  getDataGraphic(day, month, year){

    return this.http.get(`${this.url}/?dia=${day}&mes=${month}&anio=${year}`)
      .pipe(map(data => {
        return this.proccesDataGraphic(data['data']);
      }))

  }

  getData(day, month, year) {
    return this.http.get(`${this.url}/?dia=${day}&mes=${month}&anio=${year}`)
      .pipe(map(data => {
        return data['data'];
      }))
  }

  private proccesDataGraphic(data:any){
    
    let tiendasArray = [];

    for ( var tienda of data){
      let tiendaAux;

      tiendaAux = {
        name: tienda.CATDESCR,
        y: parseInt(tienda.IMPORTE)
      }

      tiendasArray.push(tiendaAux);
    }

    return tiendasArray;

  }


}


