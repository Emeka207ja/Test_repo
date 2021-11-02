import React from 'react'

const Validate = (values) => {
    let errors = {}
    if(!values.firstname.trim()){
        errors.firstname = 'firstname required'
    }
    if(!values.lastname.trim()){
        errors.lastname = 'lastname required'
    }
    if(!values.email){
        errors.email = 'email required'
    }
    if(!values.password){
        errors.password = 'password required'
    }
    else if(values.password.length<5){
        errors.password = 'password must be 5 characters'
    }
    if(!values.confirmPass){
        errors.confirmPass = 'confirm password required'
    }
    else if(values.confirmPass !== values.password){
        errors.confirmPass = 'password is not a match'
    }
    return errors
}

export default Validate
