import React from 'react';
import { Link } from 'react-router-dom';

import Image from './Image';
import face from '../images/face.png';
import twitter from '../images/twitter.png';
import insta from '../images/instagram.png';
import brillo from '../images/brillo.gif';
import '../components/styles/Footer.css';

class Footer extends React.Component {
    render() {
        return(
            <footer className="footer">
                <div className="footer-title">
                    <h2>{this.props.title}</h2>
                </div>
                <div className="footer-brillo">
                    <Image src={brillo}/>
                    <Image src={brillo}/>
                    <Image src={brillo}/>
                    <Image src={brillo}/>
                    <Image src={brillo}/>
                    <Image src={brillo}/>
                </div>
                <div className="footer-icons" >
                    <Link to="" /> <Image src={face} /> 
                    <Link to="" /><Image src={twitter} />
                    <Link to="" /><Image src={insta} />
                </div>
                <div className="footer-brillo">
                    <Image src={brillo}/>
                    <Image src={brillo}/>
                    <Image src={brillo}/>
                    <Image src={brillo}/>
                    <Image src={brillo}/>
                    <Image src={brillo}/>
                </div>
            </footer>
        )
    }
};

export default Footer;