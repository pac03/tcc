import { useState } from 'react';
import '../Salgados/salgado.css';
import dori from'../../img_produtos/Lanche/doritos.png'
import elma from'../../img_produtos/Lanche/cebolitos.png'
import fandangos from'../../img_produtos/Lanche/fandangos.png'
import yoki from'../../img_produtos/Lanche/yokiazul.png'
import snack from'../../img_produtos/Lanche/crocaoriginal.png'



function Salgados() {

  
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
        < img src={dori} alt="img1" />
        <h3>Salgadinho Doritos de Queijo Nacho 140g</h3>
       
        <span>R$ 9,00</span>
        <a href="#" className="btn">adicionar</a>
    </div>


<div className="box">
    < img src={elma} alt="img1" />
    <h3>Salgadinho Elma Chips Cebolitos Clássico 190g</h3>
   
    <span>R$ 8,00</span>
    <a href="#" className="btn">adicionar</a>
</div>




<div className="box">
        < img src={fandangos} alt="img1" />
        <h3>Salgadinho Fandangos de Presunto 140g</h3>
       
        <span>R$ 5,00</span>
        <a href="#" className="btn">adicionar</a>
    </div>


<div className="box">
    < img src={yoki} alt="img1" />
    <h3>Salgadinho Yoki Yokitos Redinha de Queijo 45g</h3>
   
    <span>R$ 3,00</span>
    <a href="#" className="btn">adicionar</a>
</div>

<div className="box">
        < img src={snack} alt="img1" />
        <h3>Snack Crocantíssimo Original de Salaminho com Limão 40g</h3>
       
        <span>R$ 6,00</span>
        <a href="#" className="btn">adicionar</a>
    </div>
    

    </div>

    </section>

</div>
    </>
  );
}

export default Salgados;
