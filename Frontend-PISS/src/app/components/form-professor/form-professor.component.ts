import { Component } from '@angular/core';
import { ProfessorService } from '../../services/Professor/Professor.service';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-form-professor',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './form-professor.component.html',
  styleUrl: './form-professor.component.css',
})
export class FormProfessorComponent {
  constructor(private professorService: ProfessorService) {}

  cadastrarProfessor(
    nomeInput: string,
    emailInput: string,
    titulacaoInput: string,
    cursoInput: string,
    numMatriculaInput: string,
    codSedeInput: string,
    latesInput: string,
    referenciaInput: string
  ) {
    this.professorService.enviarCadastroProfessorParaBackend(
      nomeInput,
      emailInput,
      titulacaoInput,
      cursoInput,
      numMatriculaInput,
      codSedeInput,
      latesInput,
      referenciaInput
    );
  }

  

}
