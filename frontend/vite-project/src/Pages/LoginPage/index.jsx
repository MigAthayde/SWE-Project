import InputField from "../../Components/InputField";
import FormContainer from "../../Components/FormContainer";
import FormButton from "../../Components/FormButton";
import './style.css'

function LoginPage(){
    return (
        <FormContainer detail={"User Login"} description={"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean ."}>
            <InputField type={"email"} placeholder={"Email"} />
            <InputField type={"password"} placeholder={"Password"} />
            <FormButton title={"Login"}></FormButton>
        </FormContainer>
    )
}

export default LoginPage;