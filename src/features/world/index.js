import React from 'react'
import Map from '../map'
import Player from '../player'


function World(props) {
    return (
        <div
            style = {{
                position: 'relative',
                width: '650px',
                height: '400px',
                margin: '50px auto',
                
            }}
        >
            <Map />
            <Player />
        </div>
    )
}

export default World