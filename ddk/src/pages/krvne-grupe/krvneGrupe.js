import React from 'react';
import Navbar from '../home-page/Navbar'
import './krvne-grupe.css'

function krvneGrupe() {
    return (
      
      <>
      <Navbar />
      <div className="proba">
      <p>Krvna grupa je nasljedna i nepromjenljiva karakteristika ljudi. Naročito je važno poznavati krvnu grupu pri transfuziji krvi, jer ako se radi o A ili B krvnoj grupi, i ta krv koja se daje nema iste antigene kao i crvene krvne stanice osobe koja je prima, 
      antitijela u krvi od osobe koja prima tu transfuziju će primljenu krv prepoznati kao stranu, te će napasti i uništiti crvene krvne stanice te primljene krvi, a ta reakcija može imati vrlo ozbiljne zdravstvene posljedice, a može čak i osobu dovesti do smrti! Zbog toga je važno poznavati krvne grupe po tzv. ABO sistemu gdje postoje 4 krvne grupe:
      </p>
      </div>
      
      </>
    );
  }
  
export default krvneGrupe;