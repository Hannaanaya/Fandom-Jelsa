import React from 'react';

import Image from './Image';
import copo from '../images/copo.jpg';
import brillos from '../images/brillo.gif';
import '../components/styles/Header.css';

class Header extends React.Component {
    render() {
        return(
            <header className="header" >
                    <div className="header-img">
                    <Image src={copo} />
                    </div>

                    <div className="header-brillos">
                        <Image src={brillos}/>
                        <Image src={brillos}/>
                    </div>

                    <h1>{this.props.title}</h1>

                    <div className="header-brillos">
                        <Image src={brillos}/>
                        <Image src={brillos}/>
                    </div>

                    <div className="header-img2">
                    <Image src={copo} />
                    </div>
            </header>
        )
    }
};

export default Header;