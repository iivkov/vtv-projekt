import '../App.css';
import { ReactComponent as FacebookLogo } from '../assets/facebook_logo.svg';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
  <div className="footer">
    <div className='copyright'>
      <p className="p-footer">
        <a href="https://www.facebook.com/vtvprojekt" className="fb-icon" target="_blank" rel="noopener noreferrer">
          <FacebookLogo />
        </a>
      </p>
      <p className="p-footer">&copy; {year} VTV Projekt d.o.o.</p>
      <p className="p-footer">Kninski trg 9, 10000 Zagreb, Hrvatska</p>
      <div className="footer-contact">
        <p className="p-footer"><a href="mailto:info@vtv-projekt.hr">info@vtv-projekt.hr</a></p>
      </div>
    </div>
  </div>
  )
}

export default Footer