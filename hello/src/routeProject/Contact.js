import React from 'react'
import './Nav.css'
import useForm from './useForm'
import Validate from './Validate'
const Home =() =>{
    const {handleChange,handleSubmit,values,errors}= useForm(Validate)
    return(
        <div className='jumbotron'>
            <h2 className='text-primary text-center'>Contact Us</h2>
            <div className='container'>
               <form onSubmit={handleSubmit}>
               <div className='form-group'>
                    <label>firstname</label>
                    <input className='form-control' type='text'name='firstname' placeholder='input your firstname'onChange={handleChange}/>
                    {errors.firstname && <p>{errors.firstname}</p>}
                </div>
                <div  className='form-group'>
                    <label>lastname</label>
                    <input className='form-control' type='text'name='lastname' placeholder='input your lastname' onChange={handleChange}/>
                    {errors.lastname && <p className='text-danger'>{errors.lastname}</p>}
                </div>
                <div  className='form-group'>
                    <label>Email</label>
                    <input type='email'name='email' placeholder='input your email' onChange={handleChange} className='form-control'/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div  className='form-group'>
                    <label>Password</label>
                    <input className='form-control' type='password' placeholder='input your password' name='password'onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div  className='form-group'>
                    <label>Confirm password</label>
                    <input className='form-control' type='password' placeholder='confirm your password' name='confirmPass'onChange={handleChange}/>
                    {errors.confirmPass && <p>{errors.confirmPass}</p>}
                </div>

                <div className='form-group mt-3'>
                    <button  className='form-control btn btn-primary'>submit</button>
                </div>
               </form>
            </div>
        </div>
    )
}
export default Home