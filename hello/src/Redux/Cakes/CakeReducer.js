import {Buy_Cake} from './CakeTypes'
const initialstate= {
    numOfCakes:10
}

const CakeReducer = (state= initialstate,action)=>{
    switch(action.type){
        case Buy_Cake: return{
            ...state,
            numOfCakes: state.numOfCakes- action.payLoad
        }
        default:return state
    }
}
export default CakeReducer