import React, { useState, useEffect } from "react";
import "./App.scss";
import Navbar from '../home-page/Navbar'
import './krvne-grupe.css'
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import KrvneGrupe from '../../assets/img/krvne-grupe.png';
import APoz from '../../assets/img/A+.svg';

function krvneGrupe () {
  return (
    <>
    <Navbar/>   
    <div className = "krvne-grupe" >
    <div className = "krvne-grupe-left-side">
    <figure class="image is-round">
        <img src={KrvneGrupe}/>
        <div class="bottom-left"><a className = "referenca" href="https://www.freepik.com/vectors/icons">Icons vector created by rawpixel.com - www.freepik.com</a></div>
    </figure>    
    </div>
    <div className = "krvne-grupe-right-side">
      <h1 className = "title-h1">Krvne grupe</h1>
    <p>
      Krvna grupa je nasljedna i nepromjenljiva karakteristika ljudi. Naročito je važno poznavati krvnu grupu pri transfuziji krvi, jer ako se radi o A ili B krvnoj grupi, i ta krv koja se daje nema iste antigene kao i crvene krvne stanice osobe koja je prima, 
      antitijela u krvi od osobe koja prima tu transfuziju će primljenu krv prepoznati kao stranu, te će napasti i uništiti crvene krvne stanice te primljene krvi, a ta reakcija može imati vrlo ozbiljne zdravstvene posljedice, a može čak i osobu dovesti do smrti! 
    </p>
    <div className = "tipovi-krvne-grupe">
    
    <p>
      Postoje 4 osnovne krvne grupe prema <i>AB0 sistemu</i>:
      </p>
      <ul class="fa-ul">
        <li><i class="fas fa-heartbeat"></i>A</li>
        <li><i class="fas fa-heartbeat"></i>B</li>
        <li><i class="fas fa-heartbeat"></i>AB</li>
        <li><i class="fas fa-heartbeat"></i>0</li>
      </ul>
    <p>
      Osim prethodno spomenutog <i>AB0 sistema</i>, koristi se i druga podjela karakteristika 
      crvenih krvnih zrnaca. Ova podjela je po takozvanom <i>RH</i>, odnosno <i>rezus faktoru</i>. Prema ovoj podjeli,
      4 osnovne krvne grupe se pretvaraju u njih osam ako uračunamo prisutnost ili odsutnost <i>Rh-faktora</i>.
      Uz te bjelančevine postoji još jedna vrsta bjelančevina koju neki ljudi imaju, a neki nemaju. 
      Oni koji je imaju, kažemo da su Rh pozitivni, dok oni koji je nemaju su Rh negativni. 
    </p>
    <p className="krvne-grupe-p">Uzimajući u obzir <i>rezus faktor</i>, postoje sljedeće krvne grupe 
    (<i className = "krvne-grupe-p-i">odaberite krvnu grupu za više informacija</i>):</p>
    <ul class="fa-ul-4-col">
        <li><a href="/a-pozitivna"><i class="fas fa-heartbeat"></i>A+</a></li>
        <li><a href="/b-pozitivna"><i class="fas fa-heartbeat"></i>B+</a></li>
        <li><a href="/ab-pozitivna"><i class="fas fa-heartbeat"></i>AB+</a></li>
        <li><a href="/nula-pozitivna"><i class="fas fa-heartbeat"></i>0+</a></li>
        <li><a href="/a-negativna"><i class="fas fa-heartbeat"></i>A-</a></li>
        <li><a href="/b-negativna"><i class="fas fa-heartbeat"></i>B-</a></li>
        <li><a href="/ab-negativna"><i class="fas fa-heartbeat"></i>AB-</a></li>
        <li><a href="/nula-negativna"><i class="fas fa-heartbeat"></i>0-</a></li>
      </ul>
      
    </div>
    </div> 
    </div>
    </>
  );
}

export default krvneGrupe;