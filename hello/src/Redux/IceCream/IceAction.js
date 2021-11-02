import {Buy_Ice} from './IceType'
export const buyIce =(number)=> {
    return{
        type: Buy_Ice,
        payLoad: number
    }
}