
import { Outlet } from "react-router-dom";
import { useAuth } from "../Autenticacion/AutProvider";
import React from "react";

export default function ProtectedRoute() {
    const auth = useAuth();

    const isAuthenticated = auth.esAutentico;

    
    return <Outlet isAuthenticated={isAuthenticated} />;
}
