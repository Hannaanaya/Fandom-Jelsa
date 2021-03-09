import React from 'react';

import Image from './Image';
import { Link } from 'react-router-dom';
import '../components/styles/Histories.css';
import sonrisa from '../images/sonrisa.jpg';
import sonrisa2 from '../images/sonrisa2.jpg';
import nevada from '../images/video-nevada.gif';
import abrazo from '../images/abrazo.jpg';
import hallo from '../images/halloween.jpg';
import love from '../images/love.webp';
import api from '../api';
import Loading from './Loading';

class Histories extends React.Component {
    state= {
        loading: true,
        error: null,
        data: undefined
    };

    componentDidMount() {
        this.fetchData();
      }
    
      fetchData = async () => {
        this.setState({ loading: true, error: null });
    
        try {
          const data = await api.badges.list();
          this.setState({ loading: false, data: data });
        } catch (error) {
          this.setState({ loading: false, error: error });
        }
      };

    render() {
        if(this.state.loading === true) {
            return <Loading />;
        }

        return(
            <section className="histories">
                <h2>{this.props.title}</h2>
                <div className="histories-content">
                    <div className="container">
                    <div className="row">
                    <div className="col-6">
                    <Image src={sonrisa} />
                    </div>
                    <div className="col-6">
                    <Image src={sonrisa2} />
                    </div>
                    </div>
                    </div>
                </div>
                <div className="histories-text">
                    <h5>
                    {this.props.parr1} 
                    </h5>
                </div>
                <div className="histo-video">
                            <h5>
                           <h4><strong>{this.props.videos}</strong></h4>  
                            <p>
                            {this.props.parr2} 
                            </p>
                            <Link to="https://www.youtube.com/watch?v=1cZg8E7hJgM&ab_channel=JelsaLove">*/Link del ejemplo*/</Link>
                            </h5>
                            <Image className="col-6" src={nevada} />
                    </div>

                    <div className="histo-media">
                    <h5>
                    <h4><strong>{this.props.title2}</strong></h4> 
                    <Image className="col-3" src={abrazo} />
                    <Image className="col-5" src={hallo} />
                    <Image className="col-3" src={love} />
                    <p>
                    {this.props.parr3} 
                    </p>
                    </h5>
                    </div>
            </section>
        )
    }
};

export default Histories;