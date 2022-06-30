import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  
  alumnos=[
    'Diego Alvarez',
    'Marcos Sanchez',
    'Sandra Valle',
    'Pedro Ruiz',
    'Maria Ortiz',
  ]
  mostrar=false;
  color:string='red';
  constructor() { }

  ngOnInit(): void {
  }

}
