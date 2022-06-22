import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RUTAS } from '../../constants/urls';
import { map, Observable } from 'rxjs';
import { Personas } from 'src/domains/personas';

const API_BASE = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class MongoService {

  constructor(
    private http: HttpClient) {

  }

  getAll(): Observable<Personas[]> {
    return this.http.get<Personas[]>(API_BASE + RUTAS.mongoPersona)
      .pipe(
        map(json => {
          // arreglo para guardar los objetos transformados
          let mocks: Personas[] = [];
          // iterar las keys del objeto
          console.log(json)
          json.forEach(k => {
            // insertar el nuevo objeto
            mocks.push(k);
          });
          console.log("Valor de mocks::",mocks)
          return mocks;
        })
      )
  }


}
