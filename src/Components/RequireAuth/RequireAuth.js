import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    let location = useLocation();
    const [user, loading, error] = useAuthState(auth)
    if (loading) {
        return
        <Spinner animation="border" />
    }

    if (!user) {
        return (
            <div>
                <Navigate to="/login" state={{ from: location }} replace />

            </div>
        );

    }
    return children;

};

export default RequireAuth;