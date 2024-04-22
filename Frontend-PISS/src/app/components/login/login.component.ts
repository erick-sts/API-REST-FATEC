import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroUsuarioService } from '../../services/cadastro-usuario/cadastro-usuario.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private loginService: CadastroUsuarioService, private router: Router) { }

  login(
    email: string,
    senha: string
  ) {
    if (email == 'erickteste@gmail.com' && senha == '123'){
      this.router.navigate(['/central']);
    }else{
      alert('Login falhou. Verifique suas credenciais.');
    }
}

  // async login(email: string, senha: string) { 
  //   try {
  //     const loginSucesso = await this.loginService.enviarLoginParaBackend(email, senha);
  //     alert(email)
  //     if (loginSucesso) {
  //       alert('Login bem-sucedido!');
  //       console.log('Login bem-sucedido!')
  //       this.router.navigate(['/central']);
  //     } else {
  //       alert('Login falhou. Verifique suas credenciais.');
  //     }
  //   } catch (error) {
  //     console.error('Erro ao fazer login:', error);
  //   }
  // }

}
