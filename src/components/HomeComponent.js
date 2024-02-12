import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import '../App.css';
import slika from '../assets/AI.jpg';

const HomeComponent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);


    return (
    <div className="main_content">
        <Helmet>
            <title>Početna – VTV Projekt d.o.o.</title>
            <meta name="description" content="Pružamo usluge snimanja, obrade i analize video materijala u svrhu razvoja prilagođenih modela, pri čemu koristimo duboko učenje i umjetnu inteligenciju."/>
            <meta name="keywords" content="snimanje, obrada, analiza, prilagođeni modeli, duboko učenje, umjetna inteligencija, optimiziranje poslovnih procesa"/>
        </Helmet>
        <h1>Želite donositi prave poslovne odluke? Na pravom ste mjestu!</h1>
        <div className="container">
            <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                <img src={slika} alt="Logo AI." style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="spacer"></div>
            <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                <p>VTV Projekt d.o.o. nudi usluge snimanja, obrade i analize video materijala u svrhu razvoja prilagođenih modela koji optimiziraju specifične poslovne procese, pri čemu se prilagođavamo specifičnim potrebama klijenata. U svom radu koristimo „Deep machine learning“ i „Artificial intelligence“ za razvoj modela te za izradu baza podataka dobivenih visoko preciznom analizom videozapisa. Time svojim klijentima pružamo temelje za optimalno donošenje poslovnih odluka kao i za planiranje.</p>
                <p id="services_reference"><a href="/usluge">Saznajte više i o drugim uslugama &#8594;</a></p>
            </div>
        </div>
    </div>
    );
}

export default HomeComponent;