import { useState } from 'react';
import '../uniforme/uniforme.css';
import camisa from'../img_produtos/Uniforme/camisa.png'
import calcberm from'../img_produtos/Uniforme/bermuda.png'
import molet from'../img_produtos/Uniforme/moletom.png'



function Lanches() {

  
  return (
    <>


<link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

<div>
<header class="header">

<a href="#" class="logo">Fieb Store</a>


<div class="icons">
    <a href="home.html" class="fa-solid fa-left-long"></a>
    <a href="Carrinho.html" class="fas fa-shopping-cart"></a>
    </div>

</header>


<section className="dishes" id="dishes">
        <h1 className="heading"><span>Lanches</span></h1>

        
    
            <div className="box-container">
    
                <div className="box">
                < img src={camisa} alt="img1" />
                    <h3>Camisetas</h3>
                    <br />
                    <a href="/Doces.html" className="btn">Ver!</a>
                </div>
    
                <div className="box">
                < img src={calcberm} alt="img1" />    
                 <h3>Calças e Bermudas</h3>
                    <br />
                    <a href="/Salgado.html" className="btn">Ver!</a>
                </div>
    
                <div className="box">
                < img src={molet} alt="img1" />                   
                 <h3>Moletons</h3>
                    <br />
                    <a href="/Bebidas.html" className="btn">Ver!</a>
                </div>
    
            </div>
    
        </section>

</div>
    </>
  );
}

export default Lanches;
