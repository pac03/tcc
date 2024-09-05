import { useState } from 'react';
import '../camisa/camisa.css';
import brcroxo from'../../img_produtos/Uniforme/camisabranc_roxo.png'
import brclaranj from'../../img_produtos/Uniforme/camisabranc_laranj.png'
import brcazul from'../../img_produtos/Uniforme/camisabranc_azul.png'
import prtbranc from'../../img_produtos/Uniforme/camisapret_branc.png'
import prtlaranj from'../../img_produtos/Uniforme/camisapret_laranj.png'
import prtazul from'../../img_produtos/Uniforme/camisapret_azul.png'


function Camisa() {

  
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
<h1 className="heading"><span>Camisas</span></h1>

<div className="box-container">

    <div className="box">
        < img src={brcazul} alt="img1" />
        <h3>Uniforme fieb branca com bordado azul</h3>
        <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
        <span>R$ 50,00</span>
        <a href="#" className="btn">adicionar</a>
    </div>

    <div className="box">
        < img src={brclaranj} alt="img1" />
        <h3>Uniforme fieb branca com bordado laranja</h3>
        <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
        <span>R$ 50,00</span>
        <a href="#" className="btn">adicionar</a>
    </div>

<div className="box">
    < img src={brcroxo} alt="img1" />
    <h3>Uniforme fieb branca com bordado roxo</h3>
    <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
    <span>R$ 50,00</span>
    <a href="#" className="btn">adicionar</a>

</div>



<div className="box">
        < img src={prtazul} alt="img1" />
        <h3>Uniforme fieb preto com bordado laranja</h3>
        <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
        <span>R$ 56,00</span>
        <a href="#" className="btn">adicionar</a>
    </div>

    <div className="box">
        < img src={prtlaranj} alt="img1" />
        <h3>Uniforme fieb preto com bordado laranja</h3>
        <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
        <span>R$ 56,00</span>
        <a href="#" className="btn">adicionar</a>
    </div>

    <div className="box">
        < img src={prtbranc} alt="img1" />
        <h3>Uniforme fieb preto com bordado branco</h3>
        <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
        <span>R$ 56,00</span>
        <a href="#" className="btn">adicionar</a>
    </div>
    
    </div>
    </section>

</div>
    </>
  );
}

export default Camisa;
