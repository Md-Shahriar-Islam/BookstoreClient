import React, { useState } from 'react';
import { GoogleLoginButton, GithubLoginButton } from "react-social-login-buttons"
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth'
import "./SocialLogIn.css"
import auth from '../../../firebase.init';

const SocialLogIn = () => {

    const [signInWithGoogle, gglUser, gglloading, gglerror] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitloading, giterror] = useSignInWithGithub(auth);
    let error, user;
    if (gglerror || giterror) {
        error = gglerror?.message || giterror?.message
    }
    if (gglUser) {
        user = gglUser?.email || gitUser?.email

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