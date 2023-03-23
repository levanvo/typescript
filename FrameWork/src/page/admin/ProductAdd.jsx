import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductAdd = ({ onAdd }) => {
    const [valueInput, setValueInput] = useState({
        name: "",
        price: 0
    });
    const navigate = useNavigate();
    const onHandleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValueInput({ ...valueInput, [name]: value })
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        onAdd(valueInput)
        // onAdd({
        //     name: value
        // });
        navigate('/')
    }
    return (
        <div className="">
            <a href='/'><h1>Add Product</h1></a>
            <form onSubmit={onHandleSubmit}>
                <input type="text" name="name" placeholder="Ten san pham" onChange={onHandleChange} />
                <input type="number" name="price" placeholder="Gia san pham" onChange={onHandleChange} />
                <button>Submit</button>
            </form>
        </div>
        
    )
}

export default ProductAdd