import { useState } from 'react';
import '../Doces/doce.css';
import fini from'../../img_produtos/Lanche/balabeijin.jpg'


function Lanche() {

  
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
        < img src={fini} alt="img1" />
        <h3>Bala Gelatinosa Fini Amoras <br />90g</h3>
       
        <span>R$ 8,00</span>
        <a href="#" className="btn">adicionar</a>
    </div>

 

    <div className="box">
        < img src={fini} alt="img1" />
        <h3>Bala Gelatinosa Fini Amoras <br />90g</h3>
       
        <span>R$ 8,00</span>
        <a href="#" className="btn">adicionar</a>
    </div>


<div className="box">
    < img src={fini} alt="img1" />
    <h3>Bala Gelatinosa Fini Amoras <br />90g</h3>
   
    <span>R$ 8,00</span>
    <a href="#" className="btn">adicionar</a>
</div>




<div className="box">
        < img src={fini} alt="img1" />
        <h3>Bala Gelatinosa Fini Amoras <br />90g</h3>
       
        <span>R$ 8,00</span>
        <a href="#" className="btn">adicionar</a>
    </div>


<div className="box">
    < img src={fini} alt="img1" />
    <h3>Bala Gelatinosa Fini Amoras <br />90g</h3>
   
    <span>R$ 8,00</span>
    <a href="#" className="btn">adicionar</a>
</div>
<div className="box">
        < img src={fini} alt="img1" />
        <h3>Bala Gelatinosa Fini Amoras <br />90g</h3>
       
        <span>R$ 8,00</span>
        <a href="#" className="btn">adicionar</a>
    </div>
    

    </div>

    </section>

</div>
    </>
  );
}

export default Lanche;
