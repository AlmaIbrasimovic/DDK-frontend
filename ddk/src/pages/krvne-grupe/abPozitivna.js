import React, { useState, useEffect } from "react";
import Navbar from '../home-page/Navbar'
import './krvne-grupe-detalji.css'
import Grupa from '../../assets/img/AB+.svg';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function ABPozitivna () {
  const { t } = useTranslation();
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
            <h1 className = "title-blood-type-grupa">AB+ krvna grupa</h1>
            <p>
            
            </p>
            <h1>
                <i>Koliko je rijetka AB pozitivna krvna grupa?</i>
            </h1>
            <p>
                1 od 50 {t('darivaoca.1')} krvi ima AB pozitivnu krvnu grupu, što znači da samo oko <i>2% {t('darivaoca.1')}</i> ima AB pozitivnu krvnu grupu. Ova statistika, 
                činu ovu krvnu grupu jednu od najrjeđih među svjetskom populacijom.
            </p>
            <h1>
                <i>Ko može primiti AB pozitivnu krvnu grupu?</i>
            </h1>
            <p>
                AB pozitivnu krvnu grupu može primiti samo ista krvna grupa, tj. AB pozitivna:
            </p>
            <ul className ="fa-ul">
                <li><i class="fas fa-heartbeat"></i>AB+</li>
            </ul>
            <h1>
                <i>Koje krvne grupe mogu primiti pacijenti sa AB pozitivnom grupom?</i>
            </h1>
            <p>
                Pacijenti sa AB pozitivnom krvnom grupom mogu primiti sve krvne grupe:
            </p>
            <ul class="fa-ul-4-col">
                <li><a href="/a-pozitivna"><i class="fas fa-heartbeat"></i>A+</a></li>
                <li><a href="/b-pozitivna"><i class="fas fa-heartbeat"></i>B+</a></li>
                <li><a href="/ab-pozitivna"><i class="fas fa-heartbeat"></i>AB+</a></li>
                <li><a href="/0-pozitivna"><i class="fas fa-heartbeat"></i>0+</a></li>
                <li><a href="/a-negativna"><i class="fas fa-heartbeat"></i>A-</a></li>
                <li><a href="/b-negativna"><i class="fas fa-heartbeat"></i>B-</a></li>
                <li><a href="/ab-negativna"><i class="fas fa-heartbeat"></i>AB-</a></li>
                <li><a href="/0-negativna"><i class="fas fa-heartbeat"></i>0-</a></li>
            </ul>
           
        </div>
      </div>
    </>
  );
}

export default ABPozitivna;