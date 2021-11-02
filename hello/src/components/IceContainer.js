import React, {useState} from 'react'
import {connect} from 'react-redux'
import {buyIce} from '../Redux/Index'


function IceContainer({numOfIce,buyIce}) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of IceCream - {numOfIce}  </h2>
           
            
            <input type='text' value={number} onChange={e=> setNumber(e.target.value)}/>
            <button onClick = {() =>buyIce(number)}>Buy IceCream</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        numOfIce: state.ice.numOfIce
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        buyIce: (number) => dispatch(buyIce(number))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (IceContainer)
