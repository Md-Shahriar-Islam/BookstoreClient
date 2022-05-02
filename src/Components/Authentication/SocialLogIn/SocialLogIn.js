import React, { useState } from 'react';
import { GoogleLoginButton, GithubLoginButton } from "react-social-login-buttons"
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth'
import "./SocialLogIn.css"
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogIn = () => {
    let location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, gglUser, gglloading, gglerror] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitloading, giterror] = useSignInWithGithub(auth);
    let error, user;
    if (gglerror || giterror) {
        error = gglerror?.message || giterror?.message
    }

    if (gglUser || gitUser) {
        user = gglUser?.email || gitUser?.email
        navigate(from, { replace: true });

    }

    return (

        <div className="logbtn">

            <GoogleLoginButton onClick={() => signInWithGoogle()} />
            <GithubLoginButton onClick={() => signInWithGithub()} />
            <p className="text-danger">{error}</p>

        </div>
    );
};

export default SocialLogIn;