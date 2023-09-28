import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const SignUp = () => {
    const user = useContext(AuthContext);
    console.log(user)

    return <div>Sign Up</div>
}

export default SignUp;