import { memo, useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

import axios from 'axios';

import { useNavigate } from "react-router-dom";


const Login = () => {
    const [username, setUsername] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [hasError, setHasError] = useState(false);
    const navigate = useNavigate();

    const onChange = (value) => {
        setHasError(false);
        setUsername(value);
    }
    const onSubmit = async () => {
        try {

            const user = await axios.post('api/user/login', {username})
            if(user){
                console.log("Logging in user ", username);
                navigate('/')
            }else{
                console.log("No such user");
                
            }
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div>
            <Input onChange={onChange} hasError={hasError}/>
            <Button label={"Log in"} onClick={onSubmit}/>
        </div>
    );
}

export default memo(Login);