import React, { useState, useEffect } from "react";
import Navbar from '../home-page/Navbar'
import '../a-pozitivna/aPozitivna.css'
import Grupa from '../../assets/img/A-.svg';

function aNegativna () {
  return (
    <>
    <Navbar/>
    <div className = "krvna-grupa">
        <div className = "left">
            <figure class="image is-5by4">
                <img src={Grupa}/>
            </figure>
        </div>
        <div className ="blood-type-right">
            <h1 className = "title-blood-type-grupa">A- krvna grupa</h1>
            <p>
            Ova krvna grupa je jako bitna, jer bilo koji pacijent može primiti trombocite A negativne krvne grupe. Zbog ovoga, se
            negativni trombociti nazivaju <i>"univerzalnim trombocitima"</i>. Negativna
            crvena zrnca se mogu koristiti za liječenje oko 40% svjetske populacije.
            </p>
            <h1>
                <i>Koliko je rijetka A negativna krvna grupa?</i>
            </h1>
            <p>
                1 od 13 donora krvi ima A negativnu krvnu grupu, tj. oko <i>8% darivatelja</i> ima A negativnu krv, 
                što je čini jako rijetkom krvnom grupom.
            </p>
            <h1>
                <i>Ko može primiti A negativnu krvnu grupu?</i>
            </h1>
            <p>
                A negativnu krvnu grupu mogu primiti sljedeće krvne grupe:
            </p>
            <ul className ="fa-ul-4-col">
                <li><i class="fas fa-heartbeat"></i>A+</li>
                <li><i class="fas fa-heartbeat"></i>AB+</li>
                <li><i class="fas fa-heartbeat"></i>A-</li>
                <li><i class="fas fa-heartbeat"></i>AB-</li>
            </ul>
            <h1>
                <i>Koje krvne grupe mogu primiti pacijenti sa A negativnom grupom?</i>
            </h1>
            <p>
                Pacijenti sa A negativnom krvnom grupom mogu primiti sljedeće krvne grupe:
            </p>
            <ul className ="fa-ul">
                <li><i class="fas fa-heartbeat"></i>A-</li>
                <li><i class="fas fa-heartbeat"></i>0-</li>
            </ul>
           
        </div>
      </div>
    </>
  );
}

export default aNegativna;