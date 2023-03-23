import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getOne } from '../api/handle';

const ProductDetail = () => {
    const { id } = useParams(); //{id: "1"}
    const [product, setProduct] = useState({});
    useEffect(() => {
        // fetch('http://localhost:3000/products/' + id)
        //     .then(response => response.json())
        //     .then(data => setProduct(data))
        getOne(id).then(({ data }) => setProduct(data));
    }, [])
    return (
        <div>
            <a href='/'><h1>Detail Product</h1></a>
            <div className='getAll space'>{product.name}</div>
        </div>
    )
}
export default ProductDetail