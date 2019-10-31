import store from '../../store'
import {SPRITE_SIZE, MAP_WIDTH} from '../../constants'

export default function handleMovement(player) {

    function getNewPosition(direction) {
        const oldPos = store.getState().player.position
        switch(direction) {
            case 'LEFT':
                return [ oldPos[0]- SPRITE_SIZE, oldPos[1] ]
            case 'RIGHT':
                return [ oldPos[0] + SPRITE_SIZE, oldPos[1] ]
        }
    }

    function observeBoundaries(oldPos, newPos) {
        return newPos[0] >= 0 && newPos[0] <= MAP_WIDTH ? newPos : oldPos
    }

    function dispatchMove(direction) {
        const oldPos = store.getState().player.position
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: observeBoundaries(oldPos, getNewPosition(direction)),
                direction
            }
        })
    }

    function handleKeyDown(e) {
        e.preventDefault()


        switch(e.keyCode) {

            case 37:
                return dispatchMove('LEFT')

            // case 38:
            //     return dispatchMove('UP')

            case 39:
                return dispatchMove('RIGHT')

            // case 40:
            //     return dispatchMove('DOWN')

            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
        // setInterval(() => handleKeyDown(e), 1000)
    })

    return player
}