import React from 'react';
import '../App.css';
// import slika from '../assets/proejkt (1).jpg';

const EquipmentComponent = () => {
    // const [animate, setAnimate] = useState(false);

    // useEffect(() => {
    //   setAnimate(true);
    // }, []);


    return (
    <div className="main_content">
        <h1>Prometna oprema</h1>
        <div className="container">
            <p>U izradi...</p>
            {/* <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                <p>U izradi...</p>
            </div>
            <div className="spacer"></div>
            <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                <img src={slika} alt="Slika..." style={{ width: '100%', height: 'auto' }} />
            </div> */}
        </div>
    </div>
    );
}

export default EquipmentComponent;