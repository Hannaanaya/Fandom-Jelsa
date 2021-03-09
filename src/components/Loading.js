import React from 'react';

import Image from './Image';
import '../components/styles/Loading.css';
import carga from '../images/loading.gif';

function Loading() {
    return (
        <div className="loading" >
            <Image src={carga} />
        </div>
    );
}

export default Loading;