import React, { useEffect, useState } from 'react';

const useCustom = (url) => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return [books, setBooks]
};

export default useCustom;