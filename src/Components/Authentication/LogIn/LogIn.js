import React from 'react';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import { GoogleLoginButton, GitHubLoginButton } from "react-social-login-buttons"
import EmailLogIn from '../EmailLogIn/EmailLogIn';
import { Link, useNavigate } from 'react-router-dom';


const LogIn = () => {
    return (
        <div>
            <EmailLogIn></EmailLogIn>
            <p className="text-center">don't have an account? <Link to="/register"> register here</Link></p>


            <h6 className="m-2 text-center">or</h6>

            <h5 className="text-center mb-2">connect with</h5>
            <hr className="w-25 mx-auto"></hr>
            <SocialLogIn></SocialLogIn>

        </div>
    );
};

export default LogIn;