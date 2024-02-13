import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import '../App.css';
import slika from '../assets/proejkt (1).jpg';

const AboutComponent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);


    return (
    <div className="main_content">
        <Helmet>
            <title>O nama – VTV Projekt d.o.o.</title>
            <meta name="description" content="Poslovi koje obavljamo obuhvaćaju projektiranje, nadzor izgradnje, vještačenje, legalizaciju bespravnih građevina, etažiranje građevina te geodetske izmjere."/>
            <meta name="keywords" content="graditeljstvo, promet, projektiranje, nadzor izgradnje, vještačenje, legalizacija, etažiranje, geodetske izmjere"/>
        </Helmet>
        <h1>O nama</h1>
        <div className="container">
            <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                <p>VTV Projekt d.o.o. osnovan je 2020. godine i bavi se poslovima graditeljstva i prometa. Poslovi koje obavljamo obuhvaćaju 
                    projektiranje, nadzor izgradnje, vještačenje, izradu procjene gradnje, izradu procjene izgrađenih građevina, legalizaciju bespravnih građevina, 
                    etažiranje građevina te geodetske izmjere.</p>
            </div>
            <div className="spacer"></div>
            <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                <img src={slika} alt="Slika prometne projektne dokumentacije." style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>
    </div>
    );
}

export default AboutComponent;