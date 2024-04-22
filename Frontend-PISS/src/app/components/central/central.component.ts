import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ProfessorService } from '../../services/Professor/Professor.service';

@Component({
  selector: 'app-central',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './central.component.html',
  styleUrl: './central.component.css',
})
export class CentralComponent implements OnInit {

  professores: any[] = [];
  professor: any
  quantidadeProfessoresCadastrados: number = 1

  constructor(
    private professorService: ProfessorService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.listarProfessores();
    this.contarProfessoresCadastrados()
  }

  buscarProfessorPeloNome(nome: string): void {
    // Verifica se o nome não está vazio
    if (nome.trim() !== '') {
      this.professorService.obterProfessorPorNome(nome)
        .subscribe(
          (data) => {
            if (Array.isArray(data) && data.length > 0) {
              const professorEncontrado = data[0];
              this.professores = [professorEncontrado]; // Atualiza a lista de professores apenas com o professor encontrado
            } else {

              alert('Nenhum professor encontrado com o nome: ' + nome);
            }
          },
          (error) => {
            alert('Erro ao buscar professor: ' + error.message);
            this.professores = []; // Limpa a lista de professores
          }
        );
    }
  }

  buscarProfessorPorCurso(cursosSelecionados: HTMLInputElement[]): void {
    const cursos: string[] = []
    for (const checkbox of cursosSelecionados) {
      if (checkbox.checked) {
        cursos.push(checkbox.value)
      }
    }

    this.professorService.obterProfessorPorCurso(cursos).subscribe((data) => {
      this.professores = data
    })


  }

  contarProfessoresCadastrados() {
    this.professorService.contarProfessoresCadastrados()
      .subscribe(
        (data) => {  
          console.log(JSON.stringify(data))
            this.quantidadeProfessoresCadastrados = data.numeroProfessores; 
          }
      );
  }
  


  listarProfessores(): void {
    this.professorService.listarProfessores().subscribe(
      (professoresBanco) => {
        this.professores = professoresBanco;
      },
      (error) => {
        console.error('Erro ao listar professores:', error);
      }
    );
  }

  excluirProfessor(professor: any): void {
    if (confirm('Tem certeza que deseja excluir este professor?')) {
      this.professorService
        .excluirProfessor(professor.numero_matricula)
        .subscribe(
          () => {
            // Remover o professor da lista local
            this.professores = this.professores.filter((p) => p !== professor);
            console.log('Professor excluído com sucesso.');
            this.router.navigate(['/central']);
          },
          (error: any) => {
            // Tipando explicitamente o parâmetro error
            console.error('Erro ao excluir professor:', error);
          }
        );
    }
  }
}
