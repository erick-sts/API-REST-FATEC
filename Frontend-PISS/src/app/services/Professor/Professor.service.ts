import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  constructor(private http: HttpClient) {}

  enviarCadastroProfessorParaBackend(
    nome: string,
    numero_matricula: string,
    cod_ue: string,
    titulacao: string,
    referencia: string,
    lates: string,
    curso: string,
    email: string
  ) {
    alert('teste ok');
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
    this.http.post<any>('http://localhost:3000/professores/', data).subscribe({
      next: (response) => {
        alert('Professor cadastrado com sucesso!');
      },
      error: (error) => {
        alert('Erro ao cadastrar Professor:' + error.message);
      },
    });
  }

  listarProfessores(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/professores/');
  }

  atualizarCadadastroProfessor(
    nome: string,
    numero_matricula: string,
    cod_ue: string,
    titulacao: string,
    referencia: string,
    lates: string,
    curso: string,
    email: string,
    observacoes: string
  ):Observable<any>{
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
      'http://localhost:3000/professores/' + numero_matricula, data
    )
  }
 

  obterProfessorPorNome(nome: string): Observable<any> {
    return this.http.get<any>('http://localhost:3000/professores/' + nome);
  }

  obterProfessorPorCurso(curso1: String, curso2: String, curso3: String):Observable<any> {
    return this.http.get<any>('http://localhost:3000/professores/' + curso1)
  }
  

  excluirProfessor(numero_matricula: string): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/professores/' + numero_matricula);
  }

}
