import { useState } from 'react';
import './moletom.css';
import moletom from'../../img_produtos/Uniforme/moletom.png'
import molet from'../../img_produtos/Uniforme/molet.png'
import molazul from'../../img_produtos/Uniforme/molet_azul.png'


function Moletom() {

  
  return (
    <>


<link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

<div>
    <header className="header">
<a href="#" className="logo">Fieb Store's</a>


<div className="icons">
    <a href="home.html" className="fa-solid fa-left-long"></a>
    <a href="Carrinho.html" className="fas fa-shopping-cart"></a>
    </div>

</header>


<section className="dishes" id="dishes">
<h1 className="heading"><span>Moletom</span></h1>

<div className="box-container">

    <div className="box">
        < img src={moletom} alt="img1" />
        <h3>Moletom fechado preto</h3>
        <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
        <span>R$ 145,00</span>
        <a href="#" className="btn">adicionar</a>
    </div>

 

    <div className="box">
        < img src={molet} alt="img1" />
        <h3>Moletom c/zíper cinza tradicional</h3>
        <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
        <span>R$ 120,00</span>
        <a href="#" className="btn">adicionar</a>
    </div>


<div className="box">
    < img src={molazul} alt="img1" />
    <h3>Moletom c/zíper azul</h3>
    <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
    <span>R$ 155,00</span>
    <a href="#" className="btn">adicionar</a>

</div>
    </div>
    </section>

</div>
    </>
  );
}

export default Moletom;
