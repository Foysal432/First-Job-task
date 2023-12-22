import { Navigate, useLocation } from "react-router-dom"
import useAuth from "../Hook/useAuth"

const PrivateRoute = ({children}) => {
    const {user,isLoading}=useAuth()
    const location = useLocation()
    if (isLoading) {
        return <span className="loading loading-ball loading-lg"></span>
    }
    if(user){
        return children
    }
    else{
        return <Navigate to="/login" state={{ from: location.pathname }}></Navigate>;
    }}
export default PrivateRoute;