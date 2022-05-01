import React from 'react';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import { GoogleLoginButton, GitHubLoginButton } from "react-social-login-buttons"

const LogIn = () => {
    return (
        <div>
            <SocialLogIn></SocialLogIn>

        </div>
    );
};

export default LogIn;