import React, { useEffect, useState } from 'react';

const useCustom = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [books])
    return [books, setBooks]
};

export default useCustom;