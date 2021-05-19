import React, { useState, useEffect } from "react";
import Navbar from '../home-page/Navbar'
import './FAQ.css'
import picture from '../../assets/img/faq1.jpg';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Lottie from 'react-lottie';
import faqAnimation from '../../lotties/faq1.json'

function FAQ () {

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: faqAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const { t } = useTranslation();
  return (
    <>
    <Navbar/>
    <div className = "proces-darivanja">
        <div className = "left">
          <Lottie 
            options={animationOptions}
            height={590}
            width={550}
          />
           
        </div>
        <div className ="proces-darivanja-right">
            <h1 className = "title-blood-type-grupa">Česta pitanja o {t('darivanju.1')} krvi</h1>
            <p>
            </p>
            <h1><i>Šteti li {t('darivanje.1')} krvi zdravlju?</i></h1>
            <p>
            {t('Darivanje.1')} krvi ne šteti zdravlju ako se provedu svi propisani postupci pri odabiru {t('darivaoca.1')} krvi. Svaka zdrava osoba između 18 i 65 godina starosti može bez opasnosti za svoje zdravlje {t('darivati.1')} krv, 3 do 4 puta u toku jedne godine.
            Zdrav organizam {t('darivaoca.1')} krvi vrlo brzo u potpunosti nadoknađuje količinu i sve sastavne dijelove darovane krvi: već unutar 24 sata organizam nadoknadi tekući dio krvi - plazmu i njene sastojke, broj trombocita i leukocita. Eritrociti se nadoknade unutar 4 do 6 {t('sedmica.1')}.
            {t('Darivanje.1')} krvi najviše utječe na željezo koje se u obliku hemoglobina nalazi u eritrocitima (crvene krvne stanice).
            {t('Darivanjem.1')} 450 mL krvi {t('darivaoc.1')} gubi oko 200 mg željeza. Organizam nadoknađuje gubitak željeza u roku 1 do 2 mjeseca povećanom apsorpcijom iz hrane.
            Prije svakog {t('darivanja.1')} krvi obavezno provjeravamo zdravstveno stanje {t('darivaoca.1')} krvi i vrijednost hemoglobina u njegovoj krvi.
            {t('Darivanje.1')} krvi nikako ne ugrožava zdravlje {t('darivaoca.1')}. {t('Darivanje.1')} krvi ujedno je i jedan oblik kontrola zdravlja {t('darivaoca.1')}.
            </p>
            <h1><i>Može li se {t('darivanjem.1')} krvi zaraziti od neke bolesti?</i></h1>
            <p>
            Mogućnost zaraze u toku {t('darivanja.1')} krvi ne postoji. Sav pribor za uzimanje krvi - igle, plastične kese i ostali materijal koji se koristi pri uzimanju krvi su sterilni 
            i za jednokratnu su upotrebu. Pribor je napravljen na način koji onemogućuje njegovu ponovnu upotrebu.
            </p>
            <h1><i>Zašto se odmah nakon {t('darivanja.1')} krvi ne smije pušiti?</i></h1>
            <p>
            Mnogi se pušači - {t('darivaoci.1')} krvi ljute kada ih zamolimo da ne zapale cigaretu odmah nakon {t('darivanja.1')}.
            Jedna od rjeđih, ali neugodnih reakcija organizma na pušenje je kratkotrajno stiskanje (spazam) krvnih žila u mozgu. 
            Stoga, ako se puši odmah nakon završenog {t('darivanja.1')} krvi, kod nekih, posebno mlađih osoba, može doći do blage omaglice i 
            mučnine. Postoji još čitav niz zdravstvenih i društvenih razloga koji pokazuju da ne bi trebalo pušiti, zar ne?
            </p>
            <h1><i>Razvija li se ovisnost za {t('darivanje.1')} krvi?</i></h1>
            <p>
             {t('Darivanje.1')} krvi ne uzrokuje ovisnost! {t('Darivanje.1')} krvi može se započeti i prestati u svako doba između 18. i 65. godine života. 
             {t('Darivanjem.1')} krvi ne nastaju nikakve štetne tjelesne promjene ili posljedice po organizam. Neki ljudi se ipak bolje osjećaju nakon što daruju krv i zato daruju krv nekoliko puta godišnje. 
              Ta je pojava češća u osoba s blago povišenim krvnim {t('pritiskom.1')}. Kod tih je osoba {t('darivanje.1')} krvi ujedno i 
              način ublažavanja simptoma uzrokovanih blagim povišenjem krvnog {t('pritiska.1')}, ali nije način liječenja povišenog {t('pritiska.1')}.
            </p>
            <h1><i>Zašto nekim {t('darivaocima.1')} otekne mjesto uboda igle kroz koju je uzeta krv?</i></h1>
            <p>
              Uzimanje krvi izvodi se ubodom sterilnom iglom u venu lakatne jame. {t('Darivanje.1')} traje 8 do 12 minuta i kroz to vrijeme igla se nalazi u veni. Po završetku uzimanja krvi igla se vadi, a kožu se na mjestu uboda zaštićuje. 
              Da bi se ubrzalo zatvaranje otvora u veni, ispružena ruka se podiže u vis. U većini je slučajeva otvor u veni potpuno zatvoren u roku od par minuta i na koži ostaje samo mali trag uboda.
              U oko 1 do 2% {t('darivaoca.1')} krvi oko mjesta uboda nastaje oteklina s promjenom boje kože (hematom), uz osjećaj zatezanja i lagane boli. Oteklina može nastati u toku ili nakon {t('darivanja.1')}. 
              Uzrok otekline u toku {t('darivanja.1')} posljedica je težeg uvođenja igle u venu ili lošeg položaja igle u veni, zbog kojeg mali dio krvi uz iglu izlazi u potkožno tkivo.
              Oteklina koja nastane nakon {t('darivanja.1')} uzrokovana je nedovoljnim stiskanjem (spazmom) vene ili jačim pokretima ruke. 
              Oteklina nije opasna nuspojava {t('darivanja.1')} krvi. Oteklina se liječi oblogom od alkohola i mirovanjem ruke. Ako se stanje ne popravi za 2 do 3 dana, potrebno je javiti se u transfuzijsku ustanovu ili liječniku opće prakse.
            </p>
            <h1><i>Zašto se neki {t('darivaoci.1')} ne osjećaju dobro nakon {t('darivanja.1')} krvi?</i></h1>
            <p>
            Većina zdravih osoba koje daruju krv podnosi gubitak 450 mL krvi bez ikakvih nuspojava. 
            Nuspojave su tijekom {t('darivanja.1')} krvi rijetkost i opažaju se u oko 3 do 5% {t('darivanja.1')} krvi. 
            Nuspojave se mogu pojaviti u toku {t('darivanja.1')}, ali i do više sati nakon {t('darivanja.1')} krvi. 
            Najčešće se javljaju blage nuspojave. Najčešći uzrok nuspojava su strah od {t('darivanja.1')} krvi, premorenost ili neispavanost, 
            zbog čega se organizam nije u stanju prilagoditi kratkotrajnom gubitku krvi.
            </p>
            <h1><i>Koliko često se može {t('darivati.1')} krv?</i></h1>
            <p>
              Muškarci mogu {t('darivati.1')} punu krv svaka 3 mjeseca, a žene svaka 4 mjeseca.
            </p>
            <h1><i>Mora li se nakon {t('darivanja.1')} krvi nešto pojesti i popiti?</i></h1>
              <p>
                Posebni medicinski razlozi ne zabranjuju {t('darivaocu.1')} da jede ili pije nakon {t('darivanja.1')} krvi. To je oblik društvenog ponašanja.
                Uobičajeno je nakon {t('darivanja.1')} krvi sjesti u društvu drugih {t('darivalaca.1')} i osvježiti se laganim obrokom i bezalkoholnim pićem.
                Kroz to vrijeme {t('darivalac.1')} je pod kontrolom zdravstvenih radnika. Želimo znati da se dobro osjećate prije nego napustite mjesto {t('darivanja.1')} krvi.
              </p>            
              <p> <a href='https://lottiefiles.com/11053-faq' className ="referenca">Animacija preuzeta sa: https://lottiefiles.com/11053-faq</a></p>
        </div>
      </div>
    </>
  );
}

export default FAQ;