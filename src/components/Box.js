import React from 'react';
import azul from '../images/azul.jpg';
import Loading from './Loading';
import api from '../api';
import Image from './Image';
import '../components/styles/Box.css';

class Box extends React.Component {
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

    render()  {
       if(this.state.loading === true) {
           return <Loading />;
       }
        return(
            <React.Fragment>
                <div className="box-ima">
                <Image src={azul} />
                </div>
            </React.Fragment>
        )
    }
};

export default Box;