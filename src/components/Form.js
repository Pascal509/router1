import {useState, useEffect} from "react"
import "./Form.css"

const Form = validate => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const {name, user} = e.target;
        setUser({
            ...user,
            [name]: user
        });
    };

    const handleLogIn = e => {
        e.preventDefault();

        setErrors(validate(user))
    };
    return { handleChange, user,handleLogIn, email, errors}

}
export default Form;