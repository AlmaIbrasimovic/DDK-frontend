import React, { useState, useEffect } from "react";
import Navbar from '../home-page/Navbar'
import './zastoDarivati.css'
import Grupa from '../../assets/img/zastoDonirati.png';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function ZastoDarivati () {
  const { t } = useTranslation();
  return (
    <>
    <Navbar/>
    <div className = "zasto-darivati">
        <div className = "left">
            <figure class="image is-5by4">
                <img src={Grupa}/>
            </figure>
        </div>
        <div className ="zasto-darivati-right">
            <h1 className = "title-blood-type-grupa">Zašto {t('darivati.1')} krv</h1>
            <p>
            </p>
            
            <p>
              Krv nije moguće proizvesti na umjetan način. Jedini izvor toga lijeka je čovjek, {t('darivaoc.1')} krvi. 
              Svi mi, kada nam zatreba krv kao lijek, ovisni smo samo o dobrovoljnim {t('darivaocima.1')} krvi.
            </p>

            <p>
              Kako bi se osiguralo brzo, kvalitetno i sigurno liječenje bolesnika 
              potrebno je uvijek imati dovoljan broj {t('darivaoca.1')} krvi, a time i dovoljne količine krvi u {t('rezervi.1')}.
            </p>
            
            <p>
            Krv je nemoguće proizvesti na umjetan način, te su {t('darivaoci.1')} krvi jedini izvor za dobijanje ovog lijeka,
            a također i jedini izvor za dobijanje ovog lijeka, a također i jedini predstavljaju istinsku sponu između 
            zdravog i bolesnog dijela populacije. Da bi krv bila dostupna onima kojima je potrebna, 
            neophodno je animirati dovoljan broj {t('darivaoca.1')} krvi koji su spremni svojom humanošću pomoći drugima u nevolji.
            </p>
           <p className ="zadnji-paragraf">
            <b>Nažalost, 1 od 10 osoba koje čitaju ovo će trebati transfuziju krvi nekad u toku svoga života. 
            Kada dođe taj trenutak, Vi ćete očekivati da krv koja vam je potrebna za liječenje bude i dostupna.</b>
           </p>
           
        </div>
      </div>
    </>
  );
}

export default ZastoDarivati;