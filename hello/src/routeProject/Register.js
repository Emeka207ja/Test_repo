import React from 'react'
import {useFormik} from 'formik'
const Register = () => {
    const initialValues={
        firstname: '',
        lastname: '',
        email : '',
        password: '',
        password2: ''
    }
    const validate = (values)=>{
       let errors={}
        if(!values.firstname.trim()){
            errors.firstname='*firstname is required '
        }
        if(!values.lastname.trim()){
            errors.lastname='*lastname is required '
        }
        if(!values.email){
            errors.email='*email is required '
        }
        if(!values.password.trim()){
            errors.password='*password is required '
        }else if(values.password.length<5){
            errors.password ='password is less than 5'
        }
        if(!values.password2.trim()){
            errors.password2='*confirm password is required '
        }else if(values.password!==values.password2){
            errors.password2='password is not a match'
        }
        
        return errors
    }
    const onSubmit = (values) =>{
        console.log('form data',values)
    }
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit
    })
    return (
        <div>
            <h2 className='text-primary text-center'>SignUp Here</h2>
            <div className='container'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='firstname'>First Name</label>
                        <input type='text' value={formik.values.name} className='form-control' id='firstname' name='firstname' onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.firstname && formik.errors.firstname? <p className='text-danger'>{formik.errors.firstname}</p>:null}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='lastname'>last name</label>
                        <input type='text' value={formik.values.name} className='form-control' id='lastname' name='lastname' onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>
                        {formik.touched.lastname && formik.errors.lastname? <p className='text-danger'>{formik.errors.lastname}</p>:null}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' value={formik.values.name} 
                        className='form-control'id='email' name='email' onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email? <p className='text-danger'>{formik.errors.email}</p>:null}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' value={formik.values.name} className='form-control'id='password' name='password' onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password? <p className='text-danger'>{formik.errors.password}</p>:null}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password2'>Confirm Password</label>
                        <input type='password' value={formik.values.name} className='form-control'id='password2' name='password2' onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.password2 && formik.errors.password2? <p className='text-danger'>{formik.errors.password2}</p>:null}
                    </div>
                    <div className='form-group mt-2'>
                        <button type='submit' className='form-control btn btn-primary'>submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
