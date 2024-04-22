import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@Injectable({
  providedIn: 'root'
})

export class CadastroUsuarioService {

  constructor(private http: HttpClient) { }

  enviarCadastroParaBackend(email: string, senha: string) {
    const data = { email, senha }; // Cria um objeto com os dados do formulário
    this.http.post<any>('https://api-rest-fatec-backend.onrender.com/usuarios/cadastrar', data).subscribe({
      next: response => {
        console.log('Usuário cadastrado com sucesso!', response);
        
        console.log(email)
      },
      error: error => {
        console.error('Erro ao cadastrar usuário:', error);
        // Aqui você pode lidar com erros, como exibir uma mensagem de erro para o usuário
      }
    });
  }


  
  // async enviarLoginParaBackend(email: string, senha: string): Promise<boolean | undefined> {
  //   try {
  //     const data = { email, senha };
  //     const response = await firstValueFrom(this.http.post<boolean>('http://localhost:3000/usuarios/login', data));
  //     console.log('Login realizado com sucesso!', response);
  //     return response;
      
  //   } catch (error) {
  //     console.error('Erro ao fazer login:', error);
  //     throw error;
  //   }
  // }


}
