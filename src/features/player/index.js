import React from 'react'
import { connect } from 'react-redux'
import tRexRight from '../../images/RIGHT/Walk_(1)_R.png'
import tRexLeft from '../../images/LEFT/Walk_(1)_L.png'
import handleMovement from './movement'

function Player(props) {

    const direction = props.direction

    return (
        <div
        style={{
            position: 'absolute',
            top: props.position[1],
            left: props.position[0],
            backgroundImage: `url('${direction === 'LEFT' ? tRexLeft : tRexRight}')`,
            backgroundPosition: '0 0',
            width: '80px',
            height: '60px'
        }}

        />
    )
}

function mapStateToProps(state) {
    return {
        ...state.player,
        // position: state.player.position
    }
}

export default connect(mapStateToProps)(handleMovement(Player))