import React, { useState, useEffect } from "react";
import Navbar from '../home-page/Navbar'
import './krvne-grupe-detalji.css'
import Grupa from '../../assets/img/B+.svg';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function BPozitivna () {
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
            <h1 className = "title-blood-type-grupa">B+ krvna grupa</h1>
            <p>
            
            </p>
            <h1>
                <i>Koliko je rijetka B pozitivna krvna grupa?</i>
            </h1>
            <p>
                1 od 13 {t('darivaoca.1')} krvi ima B pozitivnu krvnu grupu, što znači da oko <i>8% {t('darivaoca.1')}</i> ima B pozitivnu krv. Sveukupno,
                oko 10% svjetske populacije ima B krvnu grupu, što je čini jednom od najrjeđe krvne grupe.
            </p>
            <h1>
                <i>Ko može primiti B pozitivnu krvnu grupu?</i>
            </h1>
            <p>
                B pozitivnu krvnu grupu mogu primiti sljedeće krvne grupe:
            </p>
            <ul className ="fa-ul">
                <li><i class="fas fa-heartbeat"></i>B+</li>
                <li><i class="fas fa-heartbeat"></i>AB+</li>
            </ul>
            <h1>
                <i>Koje krvne grupe mogu primiti pacijenti sa B pozitivnom grupom?</i>
            </h1>
            <p>
                Pacijenti sa B pozitivnom krvnom grupom mogu primiti sljedeće krvne grupe:
            </p>
            <ul className ="fa-ul-4-col">
                <li><i class="fas fa-heartbeat"></i>B+</li>
                <li><i class="fas fa-heartbeat"></i>0+</li>
                <li><i class="fas fa-heartbeat"></i>B-</li>
                <li><i class="fas fa-heartbeat"></i>0-</li>
            </ul>
           
        </div>
      </div>
    </>
  );
}

export default BPozitivna;