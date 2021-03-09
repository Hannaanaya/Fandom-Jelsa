import React from 'react';

import Image from './Image';
import stars from '../images/stars.jpg';
import Loading from './Loading';
import api from '../api';
import '../components/styles/Curiosy.css';

class Curiosy extends React.Component {
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
        return (
            <section className="curiosidades">
                <center>
                    <h2>{this.props.title}</h2>
                </center>
                <div className="mini-box">
                <div className="cury-list">
                    <ul>
                        <h5>
                        <li>
                            {this.props.one}
                        </li>
                        <li>
                        {this.props.two}
                        </li>
                        <li>
                        {this.props.three}
                        </li>
                        <li>
                        {this.props.four}
                        </li>
                        <li>
                        {this.props.five}
                        </li>
                        <li>
                        {this.props.fix}
                        </li>
                        <li>
                        {this.props.sevent}
                        </li>
                        <li>
                        {this.props.eight}
                        </li>
                        </h5>
                    </ul>
                </div>
                <div className="cury-ima">
                    <Image src={stars} />
                </div>
                </div>
                <div className="cury-note">
                    <h6>
                        {this.props.parr}
                    </h6>
                </div>
            </section>
        )
    }
};

export default Curiosy;