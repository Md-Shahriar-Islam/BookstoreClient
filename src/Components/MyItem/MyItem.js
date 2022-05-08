import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CardCopy from '../Home/Card/CardCopy';
import MyCard from './MyCard/MyCard';

const MyItem = () => {
    const [user, loading,] = useAuthState(auth)
    const [myBook, setMyBook] = useState([])

    useEffect(() => {
        const url = 'https://lit-garden-64287.herokuapp.com/mybook?' + new URLSearchParams({ email: user?.email }).toString()
        fetch(url, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyBook(data))
    }, [user])
    console.log(myBook)

    return (
        <div className="CardHolder">
            {
                myBook.map(b => <MyCard key={b._id} book={b}></MyCard>)
            }


        </div>
    );
};

export default MyItem;