import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import { Add, getAll, Remove, Update } from './api/handle';
import Dashboard from './page/admin/Dashboard';
import ProductAdd from './page/admin/ProductAdd';
import UpdateProduct from './page/admin/UpdateProduct';
import { Product } from './page/ProductControl';
import ProductDetail from './page/ProductDetail';
import "animation.css"

function App() {
  const [getData, setData] = useState([]);

  useEffect(() => {
    getAll().then(({ data }) => setData(data));
  }, []);
  const GetAll = () => {
    return (
      <div className="">
        <h1 className='home animate__animated animate__bounce animate__infinite'>Home Page</h1>
        <div className="navigate">
          <a href="/product_control"><h1>product control + show</h1></a>
          <a href="/admin/addPr"><h1>Admin Add</h1></a>
        </div>

        {getData.map(take => {
          const id = '/detail/' + take.id;
          return (
            <a key={take.id} href={id}><div className='getAll space'>{take.name}</div></a>
          )
        })}
      </div>
    )
  };

  function RemovePr(id) {
    Remove(id);
    const look = getData.filter(get => get.id != id);
    setData(look);
  };
  const onHandleAdd = (product) => {
    let count = 0;
    for (let i = 0; i < getData.length; i++){
      count ++;
    }
    setData([...getData, { ...product, id: count+1 }])
    Add({ ...product, id: count+1 });
    console.log({ ...product,id:count+1});
  }
  const onHandleUpdate = (id,product) => {
    console.log(product);
    console.log(id);
    Update(id,product);
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<GetAll />}></Route>
        <Route path='/detail/:id' element={<ProductDetail />}></Route>
        <Route path='/admin/dashborad' element={<Dashboard />}></Route>
        <Route path="/admin/addPr" element={<ProductAdd onAdd={onHandleAdd} />} />
        <Route path='/product_control' element={<Product data_show={getData} Click_remove={RemovePr} />}></Route>
        <Route path='/admin/updatePr/:id' element={<UpdateProduct products={getData} onUpdate={onHandleUpdate} />} />
      </Routes>
    </div>
  )
}

export default App
