import React from 'react';

import Image from './Image';
import jack  from '../images/jack.jpg';
import api from '../api';
import Loading from './Loading';
import '../components/styles/BoxingJF.css';

class BoxingJF extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount() {
        this.fetchData()
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
            <div className="boxingJF">
                <div className="boxing-jack">
                    <h3>{this.props.title} </h3>
                    <h5>
                    {this.props.parr1}
                    <br></br>
                    <br></br>
                    {this.props.parr2}
                    </h5>
                    <div className="boxing-ima">
                    <Image src={jack} />
                    </div>
                </div>
            </div>
            
        )
    }
};

export default BoxingJF;