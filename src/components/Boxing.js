import React from 'react';
import '../components/styles/Boxing.css';
import BoxingE from './BoxingE';
import BoxingJF from './BoxingJF';
import Curiosy from './Cusiosy';
import Histories from './Histories';

class Boxing extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="boxing">
                <div className="boxing-info">
                <h2>{this.props.title}</h2>
                    <h5>
                    {this.props.parr1}
                    <br></br>
                    <br></br>
                    {this.props.parr2}
                    </h5>
                </div>
                <div className="boxing-blocks">
                    <div>
                    <BoxingJF
                    title="Jack Frost"
                    parr1="Antes de ser guardián, sacrificó su vida para salvar a su hermana cuando fueron
                    a patinar en un estanque congelado que estaba apunto de quebrarse. Él empezó a
                    saltar para ver que parte del hielo era segura y empujó a su hermana un lugar
                    que fuera seguro y estuviera a salvo, el hielo donde quedó Jack se rompió y cayó
                    al agua, donde murió ahogado. "
                    parr2="Después de su muerte, el Hombre de la Luna supo del acto desinteresado que tuvo
                    por salvar a su hermana a cambio de su vida y lo convirtió en un guardián. Sus
                    poderes característicos son de hielo y es el guardián de la diversión. Su ocupación
                    es entretener a los niños y difundir los sentimientos de diversión, alegría y felicidad en los niños."
                    />
                    </div>
                    <div>
                        <BoxingE
                        title="Elsa Arendelle"
                        parr1="Elsa desde que nació tenia poderes de hielo y nieve ella utilizaba esos poderes para divertirse
                        con Anna, su hermana menor. Hasta que un día jugando en la noche Elsa por accidente resbaló
                        y dirigió uno de sus rayos de hielo hacia Anna causando que se desmayara, sus padres vieron
                        que paso con Anna y fueron con los trolls donde advirtieron el peligro de los poderes de Elsa
                        y que debía ser protegida para evitar daños. Elsa fue encerrada en un cuarto y separada de
                        Anna.
                        Pasaron los años y ellas perdían mas y mas su amistad. Hasta que un día sus padres se fueron de
                        viaje pero una gran tormenta hundió su barco haciendo que fallecieran."
                        />
                    </div>
                    </div>
                <div>
                    <Curiosy
                    title="¿Por qué los emparejan?"
                    one="Tienen el mismo color caraceristico: el azul"
                    two="Los dos tuvieron que luchar contra su miedo."
                    three=" Ambos se sacrificaron por sus hermanas (Elsa aislándose en su habitación del resto de las personas y Jack al salvar a su hermana)."
                    four="Los experimentaron la soledad de distintas formas."
                    five="Ambos poseen poderes de hielo."
                    six="Tienen caracteres distintos que se complementan, Elsa es reservada y, en cambio, Jack es Divertido."
                    sevent="Deverían ser una gran pareja ya que tienen muchas cosas en comun"
                    eight="Elsa obtuvo sus poderes de nacimiento. En cambio, Jack los obtuvo cuando se convirtió en guardián"
                    parr=" Su problema del Ship radica en que son los personajes de diferentes compañías,
                    por lo que es muy difícil llegar a verlos juntos oficialmente, pero para eso están los Fanarts."
                    />
                </div>
                <div>
                    <Histories
                    title="Tipo de contenido..."
                    parr1="Es increíble la cantidad de contenido que se ha creado en los últimos años. Las primeras
                    interacciones de la pareja comenzaron por videos AMV en el 2014."
                    videos="Videos"
                    parr2="Se han inventado un sin número de historias diferentes haciendo uso de diferentes escenas 
                    de las películas de ambos personajes. Se plasma principalmente la fantasía de cómo se conocieron
                    y cómo sería su supuesta historia de amor."
                    title2="Fanarts"
                    parr3="Fanarts y comics de ellos hay por montones, incluso más que videos. A decir verdad, la calidad en muchos de estos, es
                    muy destacable. Tanto así, que muchas veces son recopilados y compartidos en diferentes foros creados por el fandom."
                    />
                </div>
            </div>
            </React.Fragment>
            
        )
    }
};

export default Boxing;