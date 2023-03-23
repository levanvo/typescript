import { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter, Link } from "react-router-dom"
import { Create, getAll } from './api/instance';
import AddPr from './page/admin/AddPr';
import DashBoard from './page/admin/DashBoard';
import Management from './page/admin/Management';
import UpdatePr from './page/admin/UpdatePr';
import AreProduct from './page/ArePr';
import DetailPr from './page/DetailPr';


function App() {
  const [getData, setData] = useState([]);
  useEffect(() => {
    getAll().then(({data})=>setData(data))
  },[]);

  function Home() {
    return (
      <div className="">
        <h1>Home Page</h1><br></br>

        <ul className='flex_1'>
          <Link className='flex_2' to={`areaPr`}><li>Area Products</li></Link>
          <Link className='flex_2' to={`addPr`}><li>Products Add</li></Link>
          <Link className='flex_2' to={`management`}><li>Products Control</li></Link>
        </ul>
      </div>
    )
  }
  function LickAdd(data) {
    let count = 0;
    for (let i = 0; i < getData.length; i++){
      count ++;
    }
    setData([...getData, { ...data ,id:count+1}]);
    Create(data);
    console.log([...getData, { ...data ,id:count+1}]);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/areaPr' element={<AreProduct data={ getData} />}></Route>
          <Route path='/detailPr/:id' element={<DetailPr />}></Route>
          <Route path='/addPr' element={<AddPr onclickAdd={ LickAdd} />}></Route>
          <Route path='/updatePr' element={<UpdatePr />}></Route>
          <Route path='/dashboard' element={<DashBoard />}></Route>
          <Route path='/management' element={<Management />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App
