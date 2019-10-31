import React from 'react'
import background from '../../images/background/layer3.png'
// import layer2 from '../../images/background/layer2.png'

function Map(props) {
    return (
        <div
        style={{
            position: 'relative',
            top: '87px',
            left: '0px',
            width:'650px',
            height: '400px',
            backgroundColor: 'LightBlue',
            border: '4px solid grey',
            backgroundImage: `url('${background}')` 
        }}></div>
    )
} 

export default Map