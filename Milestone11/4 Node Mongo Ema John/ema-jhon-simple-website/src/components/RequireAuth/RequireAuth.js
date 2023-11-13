import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    //user login kora na thakle auto login page e niye jabe
    if(!user){
        return <Navigate to="/login" state = {{from: location}} replace></Navigate>
    }
    return children;
}
export default RequireAuth;