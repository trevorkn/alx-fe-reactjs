import { Navigate } from "react-router-dom";

const isAuthenticated = false; // true to allow access

export default function ProtectedRoute({ children }) {
    if(!isAuthenticated){
        return <Navigate to="/login" replace />;
    }
    return children;
}