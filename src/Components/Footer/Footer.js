import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import Query from "../Query/Query"

const Footer = () => {
    const year = (new Date().getFullYear());
    return (
        <div className="d-flex  justify-content-between align-items-end w-100 bg-dark text-white p-4 mt-4" >
            <Query></Query>
            <p >&copy;copyright {year}</p>

        </div>
    );
};

export default Footer;