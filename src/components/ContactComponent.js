import React, {useState, useEffect, useRef } from "react";
import {Helmet} from "react-helmet";
import emailjs from '@emailjs/browser';
import '../App.css';

const ContactComponent = () => {
    const form = useRef();
    const SERVICE_ID = "service_omhgl5k";
    const TEMPLATE_ID = "template_z1fohzc";
    const PUBLIC_KEY = "TgUBeM3AG0W9iakEI";
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
          .then(
            (result) => {
              alert('Poruka je uspješno poslana! Ubrzo ćemo Vam odgovoriti.');
            },
            (error) => {
              console.log(error.text);
            }
          );
      };

	return (
    <div className="main_content">
        <Helmet>
            <title>Kontakt – VTV-Projekt d.o.o.</title>
            <meta name="description" content="U svom radu prilagođavamo se specifičnim potrebama klijenata i pružamo im temelje za optimalno donošenje poslovnih odluka. Javite nam se s povjerenjem!" />
            <meta name="keywords" content="prilagodljivost specifičnim potrebama klijenarta, optimalno donošenje poslovnih odluka, povjerenje" />
        </Helmet>
        <h1>Kontakt</h1>
        <div className="container">
            <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                <form className="contact" ref={form} onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="sender_name">Ime i prezime:</label>
                        <input type="text" id="sender_name" name="sender_name" placeholder="Unesite svoje ime i prezime" required />
                    </div>
                    <div>
                        <label htmlFor="sender_email">E-pošta:</label>
                        <input type="email" id="sender_email" name="sender_email" placeholder="Unesite svoju adresu e-pošte" required />
                    </div>
                    <div>
                        <label htmlFor="sender_subject">Predmet:</label>
                        <input type="text" id="sender_subject" name="sender_subject" placeholder="Unesite predmet poruke" required/>
                    </div>
                    <div>
                        <label htmlFor="sender_message">Poruka:</label>
                        <textarea id="sender_message" name="sender_message" placeholder="Napišite svoju poruku" rows="8" required ></textarea>
                    </div>
                    <button className="submit_button" type="submit">Pošalji</button>
                </form>
            </div>
            <div className="spacer"></div>
            <div className={`box right ${animate ? 'enter' : 'right-enter'}`} id="contact_information">
                <p>VTV Projekt d.o.o.</p>
                <p>Kninski trg 9</p>
                <p>HR-10000 Zagreb</p>
                <br/>
                <p>E-pošta: info@vtv-projekt.hr</p>
                <br/>
                <p>OIB: 84961822490</p>
                <p>MB: 05304857</p>
            </div>
            <div className="map-box">
                <iframe title="Lokacija tvrtke" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.7942995787034!2d15.966567500000002!3d45.7953486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d68cbfff0c51%3A0xb498217e85c30ab5!2sKninski%20trg%209%2C%2010000%2C%20Zagreb!5e0!3m2!1shr!2shr!4v1707222382350!5m2!1shr!2shr" width="100%" height="400" style={{border: 0, allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade"}}></iframe>
            </div>
        </div>
    </div> 
	);
};

export default ContactComponent;