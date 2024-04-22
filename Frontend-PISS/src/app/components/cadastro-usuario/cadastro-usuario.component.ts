import { Component } from '@angular/core';
import { CadastroUsuarioService } from '../../services/cadastro-usuario/cadastro-usuario.service';



@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent {

  constructor(private cadastroUsuarioService: CadastroUsuarioService) {}
  cadastrarUsuario(email: string, senha: string) {
    this.cadastroUsuarioService.enviarCadastroParaBackend(email, senha);
    
  }
}

