import React from 'react';
import './Footer.css';
import facebookIcon from '../../assets/img/facebook.png';
import instagramIcon from '../../assets/img/instagram.png';
import twitterIcon from '../../assets/img/twitter.png';
import brandLogo from '../../assets/img/brand.png';
import linkedinIcon from '../../assets/img/linkedin.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer__social'>
                <span>Seguinos en nuestras redes sociales</span>
                <div className='footer__social-icons'>
                    <div className='footer__social-icon'>
                        <a href="https://www.facebook.com" target="_blank">
                            <img className='footer__icon' src={facebookIcon} alt="Facebook"></img>
                        </a>
                    </div>
                    <div className='footer__social-icon'>
                        <a href="https://www.instagram.com" target="_blank">
                            <img className='footer__icon' src={instagramIcon} alt="Instagram"></img>
                        </a>
                    </div>
                    <div className='footer__social-icon'>
                        <a href="https://www.twitter.com" target="_blank">
                            <img className='footer__icon' src={twitterIcon} alt="Twitter"></img>
                        </a>
                    </div>
                </div>
            </div>
            <div className='footer__logo'>
                <div className='footer__logo-container'>
                    <Link to='/'>
                        <img src={brandLogo} alt="Logo House of Games"></img> 
                    </Link>
                </div>
            </div>
            <div className='footer__author'>
                <span>Desarrollado por Gonzalo Bertinat</span>
                <div className='footer__author-icon'>
                    <div className='footer__author-icon-container'>
                        <a href="https://www.linkedin.com/in/gonzabertinat/" target="_blank">
                            <img className='footer__icon' src={linkedinIcon} alt="LinkedIn"></img>
                        </a>
                    </div>
                </div>
                <span>© 2022 House of Games - Derechos reservados</span>
            </div>
        </div>
    );
}

export default Footer;