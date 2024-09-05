import { useState } from 'react';
import './login.css';
import test from '../img/login.png'


function Login() {

  
  return (
    <>

<link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

    <div>
        <div className="l-form">

            <div className="form">
            <img src={test} alt="Mascote" />

                <form action="" className="form__content">
                    <h1 className="form__title">Bem-Vindo!</h1>

                    <div className="form__div form__div-one">
                        <div className="form__icon">
                            <i className='bx bx-user-circle'></i>
                        </div>

                        <div className="form__div-input">
                            <input type="email" className="form__input" placeholder="RM" required></input>
                        </div>
                    </div>

                    <div className="form__div">
                        <div className="form__icon">
                            <i className='bx bx-lock' ></i>
                        </div>

                        <div className="form__div-input">
                            <input type="password" className="form__input"placeholder="Senha" required></input>
                        </div>
                    </div>
                    <a href="/Cadastro.html" className="form__forgot">Cadastra-se</a>

                    <input type="submit" className="form__button" value="Entrar" ></input>

                   
                </form>
            </div>

        </div>
   
        
</div>

    </>
  );
}

export default Login;
