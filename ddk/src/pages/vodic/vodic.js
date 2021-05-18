import React, { useState, useEffect } from "react";
import Navbar from '../home-page/Navbar'
import './vodic.css'
import picture from '../../assets/img/vodic1.jpg';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function Vodic () {
  const { t } = useTranslation();
  return (
    <>
    <Navbar/>
    <div className = "proces-darivanja">
        <div className = "left">
            <figure class="image is-5by4">
                <img src={picture}/>
                
            </figure>
           
        </div>
        <div className ="proces-darivanja-right">
            <h1 className = "title-blood-type-grupa">Vodič za {t('darivatelje.1')} krvi</h1>
            <p>
            </p>
            <h1><i>Ko može {t('darivati.1')} krv?</i></h1>
            <p>
              {t('Darivaoc.1')} krvi može biti svaka zdrava, odrasla osoba, {t('starosti.1')} od 18 do 65 godina kod koje se 
              ljekarskim pregledom, te provjerom {t('nivoa.1')} hemoglobina, utvrdi da {t('darivanje.1')} krvi neće ugroziti ni nju, 
              niti osobu koja bi tu krv primila. To znači da je potrebno da se zadovolje sljedeći kriteriji:
              <ul className ="fa-ul-2-col">
                  <li>- Da je osoba zdrava, dobrog {t('opšteg.1')} stanja</li>
                  <li>- Teža od 50 kg </li>
                  <li>- Hemoglobin mora biti iznad 135 g/L (Hct = 0.38) za muškarce </li>
                  <li>- Hemoglobin mora biti iznad 125 g/L (Hct = 0.4) za žene</li>
                  <li>- Interval između {t('darivanja.1')} krvi je 3 mjeseca (12 {t('sedmica.1')}) za muškarce i 4 mjeseca (16 {t('sedmica.1')}) za žene</li> 
              </ul>
            </p>
            <h1><i>{t('Darivanje.1')} krvi korak po korak</i></h1>
            <p>
              Posebna priprema za {t('darivanje.1')} krvi nije potrebna, kao ni poseban režim nakon {t('darivanja.1')} krvi, 
              ali da bi se što bolje osjećali pri {t('darivanju.1')} krvi, pogotovo ako je to prvo {t('darivanje.1')}, 
              određeni savjeti bi mogli da budu od koristi.
              Preporučuje se da prije {t('darivanja.1')} krvi osoba bude odmorna, da je prethodne noći spavala dovoljno, 
              da je uzela lagani obrok i izvjesnu količinu tekućine.
            </p>
            <h1><i>1. Upitnik za {t('darivaoce.1')} krvi</i></h1>
            <p>
              Pri svakom dolasku, {t('darivaoc.1')} daje svoje osnovne podatke, te ispunjava 'Upitnik za {t('darivaoce.1')} krvi'.
              Pri popunjavanju 'Upitnik za {t('darivaoca.1')}', koji se sastoji od niza pitanja na koje je 
              neophodno dati iskrene odgovore, jer su u funkciji brige i zdravlja {t('darivaoca.1')} koji želi da 
              daruje krv kao i bolesnika kome će ta krv biti primjenjena. Svojim potpisom {t('darivaoc.1')} potvrđuje 
              da savjesno i sa punom odgovornošću stoji iza datih odgovora. {t('Darivanje.1')} krvi ne treba da bude 
              odraz samo želje da se pomogne drugima, već i svijesti o potencijalnim rizicima primjene date krvi. 
              Osoba koja želi da {t('darivanjem.1')} krvi pomogne drugima mora biti sigurna da ovim činom neće ugroziti onoga 
              kome želi da pomogne. Ova sigurnost se postiže edukacijom i samoisključivanjem 
              u slučaju postojanja rizičnih stanja i ponašanja kao i iskrenim odgovorima na pitanja pri ljekarskom pregledu.
            </p>
            <h1><i>2. Određivanje hemoglobina i krvne grupe</i></h1>
            <p>
              Medicinski tehničar ili tehničarka će iz kapi krvi, uzete iz Vašeg prsta, odrediti {t('nivo.1')} hemoglobina i 
              krvnu grupu.
            </p>
            <h1><i>3. Pregled {t('darivaoca.1')}</i></h1>
            <p>
              Nakon određivanja hemoglobina slijedi {t('doktorski.1')} pregled. 
              {t('Doktor.1')} će Vam izmjeriti krvni {t('pritisak.1')} i uzeti {t('anamnezu.1')}, 
              te procijeniti da li možete {t('darovati.1')} krv.
            </p>
            <h1><i>4. {t('Darivanje.1')} krvi</i></h1>
            <p>
              Iskusan zdravstveni tehničar odabire venu u lakatnoj jami i bezbolno uvodi iglu u venu.
            </p>
            <h1><i>5. Zahvalni obrok</i></h1>
            <p>
              Nakon {t('darivanja.1')} krvi zavoj na pregibu lakta ne treba skidati sljedeća dva sata. 
              Tog dana treba da se unosi {t('tečnosti.1')} nešto više nego uobičajeno (za 3 do 4 čaše vode). 
              Mogu se obavljati uobičajene aktivnosti. Treba izbjegavati teži fizički rad ili vježbe 
              kao što su podizanje tereta najmanje 4 sata poslije {t('darivanja.1')} krvi. Izbjegavati žurbu, 
              pušenje bar 2 sata, alkohol bar 8 sati, dugotrajno stajanje, pregrijane prostorije. 
            </p>
            <p className ="zadnji-paragraf">
              <b>{t('Tokom.1')} {t('darivanja.1')} krvi ne postoji mogućnost zaraze {t('darivaoca.1')}. Sav pribor za uzimanje krvi - igle, plastični sistemi, 
              plastične vrećice i ostali materijal koji se koristi pri uzimanju krvi su 
              sterilni i za jednokratnu su {t('upotrebu.1')}. Pribor je napravljen na način koji onemogućuje njegovu ponovnu {t('upotrebu.1')}.</b>
            </p>
            <p> <a href='https://www.freepik.com/vectors/templates'>Templates vector created by vectorjuice - www.freepik.com</a></p>
        </div>
      </div>
    </>
  );
}

export default Vodic;