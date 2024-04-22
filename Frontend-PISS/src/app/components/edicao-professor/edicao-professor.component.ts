import { Component, OnInit} from '@angular/core';
import { ProfessorService } from '../../services/Professor/Professor.service';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edicao-professor',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './edicao-professor.component.html',
  styleUrl: './edicao-professor.component.css',
})
export class EdicaoProfessorComponent implements OnInit {

  professor: any 


  constructor(private route: ActivatedRoute, private professorService: ProfessorService) {}

  ngOnInit(): void {
    const nome = this.route.snapshot.paramMap.get('nome');
    if (nome !== null) {
      this.professorService.obterProfessorPorNome(nome).subscribe(
        (data) => {

          if (Array.isArray(data) && data.length > 0) {
            const objetoProfessor = data[0];
            console.log('Objeto Professor:', objetoProfessor);
            this.professor = objetoProfessor
          } 
          else {
            console.error('Lista de professores vazia ou inválida.');
          }
        },
        
        (error) => {
          console.error('Erro ao obter professor:', error);
        }
      );
    } else {
      console.error('Nome do professor não encontrado na rota.');
    }
  }
  
  
  
  
  atualizarProfessor(
    nome: string,
    numMatricula: string,
    codSede: string,
    titulacao: string,
    referencia: string,
    lates: string,
    curso: string,
    email: string,
    observacoes: string
  ) {
    this.professorService.atualizarCadadastroProfessor(
      nome,
      numMatricula,
      codSede,
      titulacao,
      referencia,
      lates,
      curso,
      email,
      observacoes

    ).subscribe(
      (response) => {
        // Tratar resposta, se necessário
        alert('Atualização realizada com sucesso:');
      },
      (error) => {
        // Tratar erro
        alert('Erro ao atualizar cadastro do professor:' + error.message);
      }
    );
}
}
