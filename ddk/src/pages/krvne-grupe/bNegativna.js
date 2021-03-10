import React, { useState, useEffect } from "react";
import Navbar from '../home-page/Navbar'
import './krvne-grupe-detalji.css'
import Grupa from '../../assets/img/B-.svg';

function bNegativna () {
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
            <h1 className = "title-blood-type-grupa">B- krvna grupa</h1>
            <p>
            
            </p>
            <h1>
                <i>Koliko je rijetka B negativna krvna grupa?</i>
            </h1>
            <p>
                1 od 50 donora krvi ima B negativnu krvnu grupu, što znači da samo oko <i>2% darivatelja</i> ima B negativnu krvnu grupu. Ova statistika, 
                činu ovu krvnu grupu jednu od najrjeđih među svjetskom populacijom.
            </p>
            <h1>
                <i>Ko može primiti B negativnu krvnu grupu?</i>
            </h1>
            <p>
                B negativnu krvnu grupu mogu primiti sljedeće krvne grupe:
            </p>
            <ul className ="fa-ul-4-col">
                <li><i class="fas fa-heartbeat"></i>B-</li>
                <li><i class="fas fa-heartbeat"></i>AB+</li>
                <li><i class="fas fa-heartbeat"></i>B+</li>
                <li><i class="fas fa-heartbeat"></i>AB-</li>
            </ul>
            <h1>
                <i>Koje krvne grupe mogu primiti pacijenti sa B negativnom grupom?</i>
            </h1>
            <p>
                Pacijenti sa B negativnom krvnom grupom mogu primiti sljedeće krvne grupe:
            </p>
            <ul className ="fa-ul">
                <li><i class="fas fa-heartbeat"></i>B-</li>
                <li><i class="fas fa-heartbeat"></i>0-</li>
            </ul>
           
        </div>
      </div>
    </>
  );
}

export default bNegativna;