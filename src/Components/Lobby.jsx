import { Link, Route } from "wouter";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Lobby = () => {
    return (
        <>
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/login" component={LoginForm} />
            <Link to='/register'>Register </Link>
            <Link to='/login'>Login</Link>
        </>
    )
}

export default Lobby;