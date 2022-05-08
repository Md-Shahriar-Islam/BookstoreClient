import React, { useEffect, useState } from 'react';

const useCustom = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('https://lit-garden-64287.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [books])
    return [books, setBooks]
};

export default useCustom;