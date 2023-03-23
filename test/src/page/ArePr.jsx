import React from 'react'
import { Link } from 'react-router-dom';
const AreProduct = ({ data }) => {
  return (
    <div>
      <Link className='flex_2' to={"/"}><h1>Area Products</h1></Link>
      <br></br>
      {data.map(({ name, price, id }) => {
        return (
          <Link key={id} className='flex_2' to={"/detailPr/"+id}><span>{name}</span></Link>
        )
      })}
    </div>
  )
}

export default AreProduct
