import React from 'react';
import { FcPhone } from "react-icons/fc";
import { GoMail } from "react-icons/go";
const Query = () => {
    return (
        <div>
            <h6>For Any Query</h6>
            <p className="fs-6">Contact Me:</p>
            <p className="fs-6"><FcPhone />01**************</p>
            <p className="fs-6"><GoMail />abc@mymail.com</p>
        </div>
    );
};

export default Query;