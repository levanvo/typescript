import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../api/handle";

export const Product = (props) => {
    const [getData, setData] = useState([]);
    useEffect(() => {
        setData(props.data_show);
    }, [props]);
    console.log(getData);
    function Remove(id) {
        const confirm = window.confirm("Bạn chắc muốn xóa chứ ?");
        if (confirm) {
            props.Click_remove(id);
        }
    }
    
    return (
        <div className="">
            <a href="/"><h1>Products: control + show</h1></a>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {getData.map((get, index) => {
                        return (
                            <tr key={get.id}>
                                <td>{index + 1}</td>
                                <td>{get.name}</td>
                                <td>{get.price}</td>
                                <td>
                                    <button onClick={() => Remove(get.id)}>Remove</button>
                                    <Link to={`/admin/updatePr/${get.id}`}><button>Update</button></Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};