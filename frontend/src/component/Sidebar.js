import { useEffect, useState } from 'react';
import LoadingBox from './LoadingBox';
import axios from "axios";


function Sidebar (){
    const [loading, setLoading] = useState(true);
    const [productClass, setProductClass] = useState({});
    useEffect(()=>{ 
        const fetchData = async () =>{
            try{
            setLoading(true);
            const {data} = await axios.get('/api/class');
            console.log(data)
            setProductClass(data);
            setLoading(false);
            }catch(err){
            console.log(err)
            }
        };
        fetchData();
    },[]);
    return(loading?(
        <LoadingBox />
    ):(
        <>
            <table className="table table-hover">
                <thead>
                    <tr className="table-light">
                        <th scope="col">物品分類</th>
                    </tr>
                </thead>
                <tbody>
                    {productClass.map((val) => 
                    <tr className="table-dark">
                        <th scope="row">{val.ProductClass}</th>
                    </tr>     
                    )}
                </tbody>
            </table>
        </>
    ))
};
export default Sidebar;