import React from 'react'
import { Link } from 'react-router-dom';

const DashBoard = () => {
  return (
    <div>
      <Link className='flex_2' to={"/"}><h1>Dash Board</h1></Link><br></br>
    </div>
  )
}

export default DashBoard
