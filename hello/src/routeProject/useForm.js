import React, {useState,useEffect} from 'react'

const useForm = (Validate,callback)=> {
    const [values, setValues]= useState({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        confirmPass:''
    })
    const [errors, setErrors]= useState({})
    const [submitting, setSubmitting]= useState(false)
   const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }
   const handleSubmit= (e) =>{
        e.preventDefault();
        setErrors(Validate(values))
        console.log(values)
        e.target.reset()
    }
  
        if(Object.keys(Validate(values)).length===0){
           callback() 
           setSubmitting(true)
        }
   
    return{handleChange,handleSubmit,values,errors}
     
}

export default useForm
