import { useState } from 'react';
import '../lanches/lanche.css';
import doce from'../img/doces.png'
import salgado from'../img/salgado.png'
import bebida from'../img/bebidas.png'
import sobremesa from'../img/sobremesa.png'


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
                < img src={doce} alt="img1" />
                    <h3>Doces</h3>
                    <br />
                    <a href="/Doces.html" className="btn">Ver!</a>
                </div>
    
                <div className="box">
                < img src={salgado} alt="img1" />                   
                 <h3>Salgados</h3>
                    <br />
                    <a href="/Salgado.html" className="btn">Ver!</a>
                </div>
    
                <div className="box">
                < img src={bebida} alt="img1" />                   
                 <h3>Bebidas</h3>
                    <br />
                    <a href="/Bebidas.html" className="btn">Ver!</a>
                </div>
    
                <div className="box">
                < img src={sobremesa} alt="img1" />                    
                <h3>Sobramesas</h3>
                    <br />
                    <a href="/Sobremesa.html" className="btn">Ver!</a>
                </div>
    
            </div>
    
        </section>

</div>
    </>
  );
}

export default Lanches;
