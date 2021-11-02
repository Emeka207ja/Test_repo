import React, {useState} from 'react'
import {connect} from 'react-redux'
import {buycake} from '../Redux/Index'

function CakeContainer({numOfCakes,buycake}) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of Cakes - {numOfCakes}</h2>
            <input type='text' value= {number} onChange= {e=>setNumber(e.target.value)}/>
            <button onClick= { ()=> buycake(number)}>Buy {number} Cake</button>
        </div>
    )
}

const mapStateToProps = (state)=> {
    return{
        numOfCakes:state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buycake: (number) => dispatch(buycake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
