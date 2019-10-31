const initialState = {
    position: [0, 344],
    direction: 'RIGHT'
}

const player = (state=initialState, action) => {
    switch(action.type) {
        case 'MOVE_PLAYER':
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export default player

