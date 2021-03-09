import React from 'react';

import Image from './Image';
import Loading from './Loading';
import elsa from '../images/elsa.png';
import api from '../api';
import '../components/styles/BoxingE.css';

class BoxingE extends React.Component {
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
            <div className="boxingE">
                <div className="boxing-elsa">
                    <h3>{this.props.title} </h3>
                    <h5>
                        {this.props.parr1}
                    </h5>
                    <div className="boxing-ima">
                    <Image src={elsa} />
                    </div>
                </div>
            </div>
            
        )
    }
};

export default BoxingE;