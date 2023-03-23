import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'


const UpdateProduct = (props) => {
    const { id } = useParams()
    console.log(props.onUpdate);
    const navigate = useNavigate();
    console.log(id);
    const [product, setProduct] = useState({})
    useEffect(() => {
        const product = props.products.find(item => item.id == id)
        setProduct(product)
    })

    const [inputValue, setInputValue] = useState({})
    const onHandleChange = (e) => {
        // const name = e.target.name
        // const value = e.target.value
        const { name, value } = e.target
        setInputValue({ ...inputValue, [name]: value })
    }
    const onHandleSubmit = (e) => {
        e.preventDefault()
        const updateData = { ...product, ...inputValue }
        /*
            id, name, prive
            id, name, price
        */
        // console.log(updateData);
        props.onUpdate(id,updateData);
        navigate("/");
    }
    return (
        <div>
            <a href='/'><h1>Update Product</h1></a>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" defaultValue={product?.name} onChange={onHandleChange} name='name' />
                <input type="number" defaultValue={product?.price} onChange={onHandleChange} name='price' />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default UpdateProduct