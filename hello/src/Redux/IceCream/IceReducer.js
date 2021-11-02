import {Buy_Ice} from './IceType'

const initialstate = {
    numOfIce: 20
}

const IceReducer = (state = initialstate,action) => {
    switch(action.type){
        case Buy_Ice: return{
            ...state,
            numOfIce: state.numOfIce-action.payLoad
        }
        default:return state
    }
}
export default IceReducer