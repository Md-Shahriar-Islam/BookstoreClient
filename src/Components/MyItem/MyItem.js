import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user, loading] = useAuthState(auth)
    let email
    if (user) {
        email = user.email
    }
    console.log(user)
    const [myBook, setMyBook] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/mybook?' + new URLSearchParams({ email }).toString()
        fetch(url)
            .then(res => res.json())
            .then(data => setMyBook(data))
    }, [])
    console.log(myBook)
    return (
        <div>
            <h1>hi</h1>


        </div>
    );
};

export default MyItem;