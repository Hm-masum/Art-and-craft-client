import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()

    if(loading){
        return  <div className="flex justify-center h-[50vh]"><span className="loading loading-bars loading-lg"></span></div>
    }

    if(!user){
        return <Navigate state={location?.pathname || `/`} to={`/login`}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;