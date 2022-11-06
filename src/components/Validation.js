import React from 'react'


function Validation(user) {
    let errors = {}

    if(!user.username.trim()) {
        errors.username = "Username required"
    }
    // Email
    if(!user.email) {
        errors.email = "Email required"
    }

    if(!user.password) {
        errors.password = "Password is required"
    } else if (user.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
    }

    return errors;
}

export default Validation
