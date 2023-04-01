import Button from "../../components/Button";


const Register = () => {
    const [username, setUsername]= useState('');

    const onChange = () => {
        
    }

    return (
        <div>
            <Input onChange={onChange} hasError={hasError}/>
            <Button  label={"Submit"} />
        </div>
    );
}

export default memo(Register);