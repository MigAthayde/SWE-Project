import './style.css';

function FormContainer({description, detail,children}){
    return (
        <div className="form-container">
            <div id="left-side">
                <h1>Welcome to End2End</h1>
                <p>{description}</p>
            </div>
            <div id="right-side">
                <h1>{detail}</h1>
                {children}
            </div>
        </div>
    )
}

export default FormContainer;