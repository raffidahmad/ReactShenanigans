import RegistrationForm from "./registrationPage/registration";
import LoginForm from "./login page/loginPage";
import { useState } from 'react';

export default function MetaData(props) {
    const [loginPage, setloginPage] = useState(true)

    function handleClick(event) {
        event.preventDefault();
        setloginPage(signUp => !signUp)
        };

    return (
        <div>
            {loginPage ? <LoginForm clicked={handleClick} changePage={props.changePage}/> : <RegistrationForm clicked={handleClick} />}
        </div>
    )
}