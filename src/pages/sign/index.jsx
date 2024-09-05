import { useState } from 'react';
import './sign.css';
import register from'../img/register.png'

function Sign() {

  
  return (
    <>


<link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

    <div>
    <div className="box">
        <div className="img-box">
        <img src={register} alt="regist" />
        </div>

        <div className="form-box">
            <h2>Criar Conta</h2>
            <p> Já é cadastrado? <a href="/Login.html"> Entrar </a> </p>
            <form action="#">

                <div className="input-group">
                    <label for="email">RM</label>
                    <input type="email" id="email" placeholder="Digite o seu RM completo" required></input>
                </div>

                <div class="input-group">
                    <label for="telefone">Telefone</label>
                    <input type="tel" id="telefone" placeholder="Digite o seu telefone" required></input>
                </div>

                <div className="input-group">
                    <label for="">Unidade</label>
                <div className="select">
                    <select className="format" id="format">
                       <option selected disabled> Seleciona a sua Unidade</option>
                       <option value="aldeia">FIEB - ALDEIA DA SERRA</option>
                       <option value="alpha">FIEB - ALPHAVILLE</option>
                       <option value="engenho">FIEB - ENGENHO NOVO</option>
                       <option value="belval">FIEB - JARDIM BELVAL</option>
                       <option value="paulista">FIEB - JARDIM PAULISTA</option>
                       <option value="maria">FIEB - JD. MARIA CRISTINA</option>
                       <option value="imperial">FIEB - PARQUE IMPERIAL</option>
                    </select>
                 </div>
                </div>  

                <div className="input-group w50">
                    <label for="senha">Senha</label>
                    <input type="password" id="senha" placeholder="Digite sua senha" required></input>
                </div>

                <div className="input-group w50">
                    <label for="Confirmarsenha">Confirmar Senha</label>
                    <input type="password" id="Confirmarsenha" placeholder="Confirme a senha" required></input>
                </div>

                <div className="input-group">
                    <button>Cadastrar</button>
                </div>

            </form>
        </div>
  

        
</div>

</div>
    </>
  );
}

export default  Sign;
