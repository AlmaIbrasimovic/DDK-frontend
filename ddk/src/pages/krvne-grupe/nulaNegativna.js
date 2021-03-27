import React, { useState, useEffect } from "react";
import Navbar from '../home-page/Navbar'
import './krvne-grupe-detalji.css'
import Grupa from '../../assets/img/0-.svg';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function NulaNegativna () {
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
            <h1 className = "title-blood-type-grupa">0- krvna grupa</h1>
            <p>
            </p>
            <h1>
                <i>Koliko je rijetka 0 negativna krvna grupa?</i>
            </h1>
            <p>
                1 od 50 {t('darivaoca.1')} krvi ima 0 negativnu krvnu grupu, što znači da samo oko <i>2% {t('darivaoca.1')}</i> ima B negativnu krvnu grupu. Ova statistika, 
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

export default NulaNegativna;