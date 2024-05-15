import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import '../App.css';
import slika from '../assets/proejkt (1).jpg';

const ServicesComponent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);


    return (
    <div className="main_content">
        <Helmet>
            <title>Usluge – VTV Projekt d.o.o.</title>
            <meta name="description" content="Visokotehnološke usluge za praćenje objekata na cestama, analiza prometnih tokova i detekcija oštećenja; izrada prometnih elaborata, implementacija ITS rješenja"/>
            <meta name="keywords" content="visokotehnološke usluge, praćenje objekata na cestama, analiza prometnih tokova, detekcija oštećenja, izrada prometnih elaborata, implementacija ITS rješenja"/>
        </Helmet>
        <h1>Usluge</h1>
        <div className="container">
            <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                <p>Široki spektar područja kojima se bavimo uključuje visokotehnološke usluge temeljene na naprednim algoritmima, 
                    koji omogućuju precizno prepoznavanje i praćenje objekata na cestama te analizu prometnih tokova i stanje infrastrukture. 
                    Također nudimo rješenje za automatizirani pregled cesta u svrhu detekcije oštećenja, pri čemu naša usluga ne zahtjeva skupu hardversku opremu 
                    niti je potrebno specijalističko znanje vaših djelatnika. Uz to, specijalizirani smo za izradu prometnih elaborata  i projektne dokumentacije s 
                    ciljem optimizacije prometnih tokova i povećanja sigurnosti te izradu prometnih studija. Pružamo i rješenja za regulaciju prometa u mirovanju te implementaciju ITS rješenja.</p>
            </div>
            <div className="spacer"></div>
            <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                <img src={slika} alt="Slika prometne projektne dokumentacije." style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>
    </div>
    );
}

export default ServicesComponent;