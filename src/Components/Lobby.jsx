import { Link, Route } from "wouter";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Lobby = () => {


    return (
        <>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Link to='/register'></Link>
        </>
    )
}

export default Lobby;