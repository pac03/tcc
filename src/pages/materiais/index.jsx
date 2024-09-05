import { useState } from 'react';
import './materiais.css';
import aponta from'../img_produtos/Materiais/apontador.jpg'
import calcula from'../img_produtos/Materiais/calculadora.jpg'
import caneta from'../img_produtos/Materiais/caneta.png'
import cola from'../img_produtos/Materiais/cola.png'
import corretivo from'../img_produtos/Materiais/corretivo.jpg'
import lapis from'../img_produtos/Materiais/lapis.jpg'

function Materiais() {

  
  return (
    <>


<link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

<div>
    <header className="header">
<a href="#" className="logo">Fieb Store</a>


<div className="icons">
    <a href="home.html" className="fa-solid fa-left-long"></a>
    <a href="Carrinho.html" className="fas fa-shopping-cart"></a>
    </div>

</header>


<section className="dishes" id="dishes">
<h1 className="heading"><span>Doces</span></h1>

<div className="box-container">

    <div className="box">
        < img src={aponta} alt="img1" />
        <h3>Apontador Faber-Castell 1 UN</h3>
        <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
        <span>R$ 3,50</span>
        <a href="#" className="btn">adicionar</a>
    </div>

 

    <div className="box">
        < img src={calcula} alt="img1" />
        <h3>Calculadora de Bolso Preto 1UN</h3>
        <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
        <span>R$ 15,00</span>
        <a href="#" className="btn">adicionar</a>
    </div>


<div className="box">
    < img src={caneta} alt="img1" />
    <h3>Caneta Esferográfica BIC Azul, Ponta Média de 1.0mm, 4 UN</h3>
    <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
    <span>R$ 6,00</span>
    <a href="#" className="btn">adicionar</a>

</div>

<div className="box">
        < img src={cola} alt="img1" />
        <h3>Cola branca 110g lavável Tenaz 1UN</h3>
        <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
        <span>R$ 8,00</span>
        <a href="#" className="btn">adicionar</a>
    </div>



    <div className="box">
        < img src={corretivo} alt="img1" />
        <h3>Caneta Corretiva 8ml BIC 1 UN
        </h3>
        <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
        <span>R$ 6,00</span>
        <a href="#" className="btn">adicionar</a>
    </div>



    <div className="box">
        < img src={lapis} alt="img1" />
        <h3>Lápis Triangular Faber-Castell 3 UN</h3>
        <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
        <span>R$ 7,00</span>
        <a href="#" className="btn">adicionar</a>
    </div>


    </div>
    </section>

</div>
    </>
  );
}

export default Materiais;
