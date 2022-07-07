import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public formulario: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.formulario = fb.group(
      {
        correo:[null,[Validators.required]],
        contraseña:[null,[Validators.maxLength(8),Validators.required]]
      }
    )
  }

  ngOnInit(): void {
    console.log(this.formulario.value)
  }

  submit(valorFormulario: any)
  {
    console.log(valorFormulario);
  }
}
