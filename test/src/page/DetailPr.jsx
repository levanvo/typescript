import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getOne } from '../api/instance';

const DetailPr = () => {
  const { id } = useParams();
  const [getDt, setDt] = useState({});
  useEffect(() => {
    getOne(id).then(({ data }) => setDt(data));
  },[])
    
  const { name, price }=getDt;
  return (
    <div>
      <Link className='flex_2' to={"/"}><h1>Details Products</h1></Link><br></br>
      <p>{name} \==/ {price} \==/ { id}</p>
    </div>
  )
}

export default DetailPr
