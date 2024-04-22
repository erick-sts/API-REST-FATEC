import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  constructor(private http: HttpClient) { }

  enviarCadastroProfessorParaBackend(//Create
    nome: string,
    numero_matricula: string,
    cod_ue: string,
    titulacao: string,
    referencia: string,
    lates: string,
    curso: string,
    email: string
  ) {
    const data = {
      nome,
      numero_matricula,
      cod_ue,
      titulacao,
      referencia,
      lates,
      curso,
      email,
    };
    this.http.post<any>('https://api-rest-fatec-backend.onrender.com/professores/', data).subscribe({
      next: (response) => {

      },
      error: (error) => {
        alert('Erro ao cadastrar Professor:' + error.message);
      },
    });
  }

  listarProfessores(): Observable<any[]> { //Read
    return this.http.get<any[]>('http://localhost:3000/professores/');
  }

  atualizarCadadastroProfessor( //Update
    nome: string,
    numero_matricula: string,
    cod_ue: string,
    titulacao: string,
    referencia: string,
    lates: string,
    curso: string,
    email: string,
    observacoes: string
  ): Observable<any> {
    const data = {
      nome,
      numero_matricula,
      cod_ue,
      titulacao,
      referencia,
      lates,
      curso,
      email,
      observacoes
    };
    return this.http.put<any>(
      'https://api-rest-fatec-backend.onrender.com/professores/' + numero_matricula, data
    )
  }

  excluirProfessor(numero_matricula: string): Observable<any> { //Delete
    return this.http.delete<any>('http://localhost:3000/professores/' + numero_matricula);
  }







  obterProfessorPorNome(nome: string): Observable<any> { //retorna um objeto professor, recebendo como parâmetro no back, seu nome
    return this.http.get<any>('http://localhost:3000/professores/nome/' + nome);
  }

  obterProfessorPorCurso(cursos: string[]): Observable<any> {//retorna um objeto professor, recebendo como parâmetro no back, seu curso.
    return this.http.get<any>('http://localhost:3000/professores/cursos/' + cursos)
  }

  contarProfessoresCadastrados(): Observable<any> {

    return this.http.get<any[]>('http://localhost:3000/professores/num_professores');
  }





}
