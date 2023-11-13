import React from "react";  
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";


const RequireAuth = ({children}) => {
    const location = useLocation();
    const [user] = useAuthState(auth); //getting user
    if(!user){
        return <Navigate to="/login" state={{from:location}}replace></Navigate>
    }
    return children;
}
export default RequireAuth;