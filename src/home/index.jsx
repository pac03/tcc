import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../home/home.css'
import mascote from'../src/img/mascot.png'



function App() {
  return (
   <>
      <div>
      <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

    <section className="hero">
        <div className="hero-text">
            
        <h1>Fieb Store</h1>
        <p> Aqui, você encontra tudo o que precisa para se preparar com <br></br>energia e estilo para enfrentar o dia!</p>
      
                <a href='./r'>Entrar</a>
                <a href="..//" className="ctaa"> <i className="riplay-fill"></i>Cadastra-se</a>
        </div>

        <div className="hero-img">
            <img src={mascote} alt="Mascote" />
        </div>

    </section>
  
    <div className="icons">
        <a href="#"><i className="ri-facebook-circle-line"></i></a>
        <a href="#"><i className="ri-instagram-line"></i></a>
        </div>
  </div>
  </>
  );
}
export default App;
