import React, { useState, useEffect } from "react";
import Navbar from '../home-page/Navbar'
import './krvne-grupe-detalji.css'
import Grupa from '../../assets/img/AB-.svg';
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
            <h1 className = "title-blood-type-grupa">AB- krvna grupa</h1>
            <p>
            
            </p>
            <h1>
                <i>Koliko je rijetka AB negativna krvna grupa?</i>
            </h1>
            <p>
                1 od 100 {t('darivaoca.1')} krvi ima AB negativnu krvnu grupu, što znači da samo oko <i>1% {t('darivaoca.1')}</i> ima AB negativnu krvnu grupu. Ova statistika, 
                činu ovu krvnu grupu jednu od najrjeđih među svjetskom populacijom. Sveukupno, 3% svjetske populacije
                ima AB krvnu grupu.
            </p>
            <h1>
                <i>Ko može primiti AB negativnu krvnu grupu?</i>
            </h1>
            <p>
                AB negativnu krvnu grupu mogu primiti sljedeće krvne grupe:
            </p>
            <ul className ="fa-ul">
                <li><i class="fas fa-heartbeat"></i>AB+</li>
                <li><i class="fas fa-heartbeat"></i>AB-</li>
            </ul>
            <h1>
                <i>Koje krvne grupe mogu primiti pacijenti sa AB negativnom grupom?</i>
            </h1>
            <p>
                Pacijenti sa AB negativnom krvnom grupom mogu primiti sve krvne grupe, ali samo sa <i>Rh negativnim faktorom</i>:
            </p>
            <ul class="fa-ul-4-col">
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