import {TOGGLE_HAM} from './Ham-types'
const initial_state={
    ham:false
}
const hamReducer=(state=initial_state,action)=>{
    switch(action.type){
        case(TOGGLE_HAM):
            return({
                ...state,
                ham:!state.ham
            })
        default:
            return(state)
    }
}
export default hamReducer