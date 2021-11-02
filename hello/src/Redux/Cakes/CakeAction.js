import {Buy_Cake} from './CakeTypes'

 export const buycake = (number) =>{
    return{
        type:Buy_Cake,
        payLoad: number
    }
}
