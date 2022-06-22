import { Component, OnInit } from '@angular/core';
import { Personas } from 'src/domains/personas';
import { MongoService } from '../services/mongo.service';

@Component({
  selector: 'cn-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  loading: boolean = false;
  errorMessage: any;
  
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'direccion', 'telefono'];
  data: Personas[] = [];

  constructor(public mongoServices: MongoService) {

  }

  ngOnInit(): void {
    this.getAllPersonas();    
  }

  getAllPersonas() {
    this.loading = true;
    this.errorMessage = "";

    this.mongoServices.getAll().subscribe((response:Personas[]) => {                           //next() callback
      console.log('response received')
      console.log(response);
      this.data = response;       
    })
  }

}
