import './style.css';

function InputField({type, placeholder}){
    return (
        <>
            <input type={type} placeholder={placeholder} required id='input-field'/>
        </>
    )
}

export default InputField;