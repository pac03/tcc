import { useState } from 'react'

import './app.css'
import img1 from'./imagens/img/img1.png'
import car from'./imagens/img/carrinho.png'
import feed from'./imagens/img/feedback.png'
import uniform from'./imagens/img/uniform.png'
import sumiu from'./imagens/img/sumiu.png'
import comida from'./imagens/img/comida.png'
import material from'./imagens/img/material.png' 
function App() {
 
  return (
 
   <>
     
      <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
 
   
      <div>
        <header className="header">
          <a href="#" className="logo">Fieb Store</a>
 
          <nav className="navbar">
            <a href="#home">home</a>
            <a href="#categorias">Categorias</a>
            <a href="#compra">Meu Carrinho</a>
            <a href="#feed">Feedback</a>
          </nav>
 
          <div id="menu-btn" className="fas fa-bars"></div>
        </header>
 
        <section className="home" id="home">
          <div className="image">
          <img src={img1} alt="img1" />
          </div>
 
          <div className="content">
            <h3>Olá, Alunos!</h3>
            <p>Bem-vindos à Fieb Store, onde sua experiência educacional é aprimorada
              <br />Estamos abertos durante todo o período escolar, incluindo os momentos de entrada e intervalo. Visite-nos e aproveite nossos serviços sempre que precisar!
            </p>
           
          </div>
        </section>
 
        <section className="categorias" id="categorias">
          <h1 className="heading"><span>Categorias</span></h1>
 
          <div className="box-container">
            <div className="box">
            <img src={comida} alt="comida" />
              <h3>Delícias</h3>
              <p>Venha desfrutar de uma experiência deliciosa durante o intervalo escolar!</p>
 
             <a href="/Doces.html" className="btn">Eu Quero!</a>
            </div>
 
            <div className="box">
            <img src={material} alt="material" />
              <h3>Materiais</h3>
              <p>Tenha todos os materiais escolares essenciais sempre à mão!</p>
 
              <a href="/Salgado.html" className="btn">Eu Quero!</a>
            </div>
 
            <div className="box">
            <img src={uniform} alt="uniform" />
              <h3>Uniformes</h3>
              <p>Uniformes da FIEB com preço único e qualidade garantida para todos!</p>
 
              <a href="/Bebidas.html" className="btn">Eu Quero!</a>
            </div>
 
            <div className="box">
            <img src={sumiu} alt="sumiu" />
              <h3>Achados e Perdidos</h3>
              <p>Recupere itens perdidos; veja nossa lista de objetos encontrados!</p>
 
              <a href="/Sobremesa.html" className="btn">Encontrar</a>
            </div>
          </div>
        </section>
 
        <section className="compra" id="compra">
          <h1 className="heading"><span>Meu</span> Carrinho</h1>
 
          <div className="row">
            <div className="image">
            <img src={car} alt="carrinho" />
            </div>
            <div className="content">
              <p>Venha dar uma espiada e descubra o que está ansioso para ser adquirido. Seja para uma necessidade do dia a dia ou um mimo especial, nosso carrinho está repleto de opções que vão te surpreender e encantar!</p>
             
              <a href="Carrinho.html" className="btn">Ver</a>
            </div>
          </div>
        </section>
 
        <section className="feed" id="feed">
          <h1 className="heading"><span>Feedback</span></h1>
 
          <div className="row">
            <div className="image">
            <img src={feed} alt="feedback" />
            </div>
            <form action="">
              <h3>Deixa seu Feedback</h3>
              <textarea placeholder="Sua Mensagem" className="box" cols="30" rows="10"></textarea>
              <input type="submit" value="Enviar" className="btn" />
            </form>
          </div>
        </section>
 
        <section className="footer">
          <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-instagram"></a>
          </div>
 
          <div className="credit">Copyright ©2024 <span>FIEB.Store</span> No momento sem direitos reservados</div>
        </section>
 
  </div>
  </>
  );
}
export default App