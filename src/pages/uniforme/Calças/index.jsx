import { useState } from 'react';
import '../Calças/calça.css';
import bermudblue from'../../img_produtos/Uniforme/bermud_azul.png'
import baila from'../../img_produtos/Uniforme/calça_bailarina.png'
import helenca from'../../img_produtos/Uniforme/calça_helenca.png'


function Calças() {

  
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
<h1 className="heading"><span>Calças e Bermudas</span></h1>

<div className="box-container">

    <div className="box">
        < img src={bermudblue} alt="img1" />
        <h3>Bermuda masculina fieb preta com bordado azul</h3>
        <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
        <span>R$ 39,00</span>
        <a href="#" className="btn">adicionar</a>
    </div>


    <div className="box">
        < img src={baila} alt="img1" />
        <h3>Calça bailarina poliéster fieb preta com bordado laranja</h3>
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
    < img src={helenca} alt="img1" />
    <h3>Calça helanca poliéster fieb cinza com bordado amarelo</h3>
    <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
    <span>R$ 100,00</span>
    <a href="#" className="btn">adicionar</a>

</div>
    </div>
    </section>

</div>
    </>
  );
}

export default Calças;
