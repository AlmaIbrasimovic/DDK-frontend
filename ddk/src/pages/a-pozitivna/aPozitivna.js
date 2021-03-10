import React, { useState, useEffect } from "react";
import Navbar from '../home-page/Navbar'
import './aPozitivna.css'
import APoz from '../../assets/img/A+.svg';

function aPozitivna () {
  return (
    <>
    <Navbar/>
    <div className = "krvna-grupa">
        <div className = "left">
            <figure class="image is-5by4">
                <img src={APoz}/>
            </figure>
        </div>
        <div className ="blood-type-right">
            <h1 className = "title-blood-type-grupa">A+ krvna grupa</h1>
            <p>
            Krvna grupa A prepoznaje se prisustvom antigena A na površini crvenih krvnih stanica. 
            Plazma, tekući dio krvi, u tom slučaju sadrži antitijela protiv krvne grupe B, odnosno ovo znači
            da krvna grupa A nije kompatibilna sa krvnom grupom B. 
            Pacijenti koji se podvrgavaju hemoterapiji 
            takođe imaju veliku potražnju za trombocitima od onih pacijenata sa A pozitivnom krvnom grupom.
            </p>
            <h1>
                <i>Koliko je rijetka A pozitivna krvna grupa?</i>
            </h1>
            <p>
                1 od 3 donora krvi ima A pozitivnu krvnu grupu. Oko <i>30% darivatelja</i> ima A pozitivnu krv, 
                što je čini drugom po učestalosti krvnom grupom nakon O pozitivne (36%).
            </p>
            <h1>
                <i>Ko može primiti A pozitivnu krvnu grupu?</i>
            </h1>
            <p>
                A pozitivnu krvnu grupu mogu primiti sljedeće krvne grupe:
            </p>
            <ul className ="fa-ul">
                <li><i class="fas fa-heartbeat"></i>A+</li>
                <li><i class="fas fa-heartbeat"></i>AB+</li>
            </ul>
            <h1>
                <i>Koje krvne grupe mogu primiti pacijenti sa A pozitivnom grupom?</i>
            </h1>
            <p>
                Pacijenti sa A pozitivnom krvnom grupom mogu primiti sljedeće krvne grupe:
            </p>
            <ul className ="fa-ul-4-col">
                <li><i class="fas fa-heartbeat"></i>A+</li>
                <li><i class="fas fa-heartbeat"></i>0+</li>
                <li><i class="fas fa-heartbeat"></i>A-</li>
                <li><i class="fas fa-heartbeat"></i>0-</li>
            </ul>
           
        </div>
      </div>
    </>
  );
}

export default aPozitivna;