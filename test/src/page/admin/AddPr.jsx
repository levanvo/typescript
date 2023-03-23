import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AddPr = ({onclickAdd}) => {
  const object = {
    name: "",
    price: 0,
    // local:""
  }
  const navigate = useNavigate();
  const [getData, setData] = useState(object);
  const ChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // const local = e.target.value;
    setData({...getData,[name]:value});
    // console.log(price);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    onclickAdd(getData);
    navigate("/");
  }
  return (
    <div>
      <Link className='flex_2' to={"/"}><h1>Area Add</h1></Link><br />
      
      <form onSubmit={onSubmit}>
        <input type="text" name='name' placeholder='name...' onChange={ChangeInput} />
        {/* <input type="text" name='local' placeholder='local...' onChange={ChangeInput} /> */}
        <input type="number" name='price' placeholder='price...' onChange={ChangeInput}/>
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddPr