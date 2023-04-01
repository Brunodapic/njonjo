import { memo, useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

import axios from 'axios';

import { useNavigate } from "react-router-dom";


const Register = () => {
    const [username, setUsername] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [hasError, setHasError] = useState(false);
    const navigate = useNavigate();

    const onChange = (value) => {
        setHasError(false);
        setUsername(value);
    }

    // const getUser = async (id) => {
    //     if(isLoggedIn){
    //         navigate('/');
    //     }
    //     const user = await axios.get('api/user/' + id)
    // }

    const onSubmit = async () => {
        try {
            
            await axios.post('api/user/register', {username});
            console.log("Registered user: ", username);
            setIsLoggedIn(true);
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {
    //     getUser();
    // }, [])

    return (
        <div>
            <Input onChange={onChange} hasError={hasError}/>
            <Button label={"Submit"} onClick={onSubmit}/>
        </div>
    );
}

export default memo(Register);