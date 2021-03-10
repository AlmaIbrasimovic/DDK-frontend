import React, { useState, useEffect } from "react";
import Navbar from '../home-page/Navbar'
import './krvne-grupe-detalji.css'
import Grupa from '../../assets/img/0+.svg';

function nulaPozitivna () {
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
            <h1 className = "title-blood-type-grupa">0+ krvna grupa</h1>
            <p>
            
            </p>
            <h1>
                <i>Koliko je rijetka 0 pozitivna krvna grupa?</i>
            </h1>
            <p>
                1 od 3 donora krvi ima 0 pozitivnu krvnu grupu, što znači da oko <i>35% darivatelja</i> ima B pozitivnu krv. Ova statistika
                čini ovu krvnu grupu najzastupljenijom u svjetskoj populaciji.
            </p>
            <h1>
                <i>Ko može primiti 0 pozitivnu krvnu grupu?</i>
            </h1>
            <p>
                0 pozitivnu krvnu grupu mogu primiti sve krvne grupe, ali samo sa <i>Rh pozitivnim faktorom</i>
            </p>
            <ul className ="fa-ul-4-col">
                <li><i class="fas fa-heartbeat"></i>A+</li>
                <li><i class="fas fa-heartbeat"></i>B+</li>
                <li><i class="fas fa-heartbeat"></i>AB+</li>
                <li><i class="fas fa-heartbeat"></i>0+</li>
            </ul>
            <h1>
                <i>Koje krvne grupe mogu primiti pacijenti sa 0 pozitivnom grupom?</i>
            </h1>
            <p>
                Pacijenti sa 0 pozitivnom krvnom grupom mogu primiti sljedeće krvne grupe:
            </p>
            <ul className ="fa-ul">
                <li><i class="fas fa-heartbeat"></i>0+</li>
                <li><i class="fas fa-heartbeat"></i>0-</li>
            </ul>
           
        </div>
      </div>
    </>
  );
}

export default nulaPozitivna;