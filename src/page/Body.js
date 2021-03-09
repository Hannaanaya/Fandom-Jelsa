import React from 'react'
import Header from '../components/Header';
import Box from '../components/Box';
import Boxing from '../components/Boxing';
import Footer from '../components/Footer';
import '../components/styles/Body.css';

class Body extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="body">
                <Header
                title="Fandom Jelsa"
                />
                <div className="Box" >
                    <Box />
                </div>
                <div className="Boxing">
                    <Boxing
                    title= "Jelsa"
                    parr1="Jelsa es una pareja amorosa formada por Elsa, La Reina de las Nieves,
                    de la compañía Disney, y Jack Frost, de la compañía DreamWorks. Tienen
                    cierta similitud porque poseen poderes similares. Además, los Jelsas
                    crearon FanComics sobre su amor e imágenes."
                    parr2=" El Ship empezó por dibujos y videos mal editados que se fueron
                    robando el corazón de la gente, por lo que ahora muchos desean verlos juntos."
                    />
                </div>
                <div className="Footer">
                <Footer
                title="Encuentra contenido aquí"
                />
                </div>
            </div>
            </React.Fragment>
        )
    }
};

export default Body;