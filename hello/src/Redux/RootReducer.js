import {combineReducers} from 'redux'
import CakeReducer from './Cakes/CakeReducer'
import IceReducer from './IceCream/IceReducer'
import UserReducer from '../components/users/UserReducer'

const RootReducer = combineReducers({
    cake:CakeReducer,
    ice: IceReducer,
    user: UserReducer
})

export default RootReducer