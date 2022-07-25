import Header from './component/Header';
import Item from './component/Item';
import Sidebar from './component/Sidebar';
import LoadingBox from './component/LoadingBox';
import axios from "axios"
import { useEffect, useState } from 'react';
function Home (){
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("food");
    const [productClass, setProductClass] = useState({});
    const [products, setProducts] = useState({});

    useEffect(()=>{ 

        const QueryProduct = async () =>{
            try{
            setLoading(true);
            const {data} = await axios.get('/api/product', {params:{query:query}});
            setProducts(data);
            }catch(err){
            console.log(err)
            }
        };

        const GetClass = async () =>{
            try{
            QueryProduct();
            setLoading(true);
            const {data} = await axios.get('/api/class');
            setLoading(false);
            setProductClass(data);
            }catch(err){
            console.log(err)
            }
        };
        GetClass();

    },[query]);

    return(loading?(
            <LoadingBox />
        ):(
            <div className='container p-0'>
                <Header />
                <div className='row mt-3'>
                    <div className='col-2'>
                    <table className="table table-hover">
                        <thead>
                            <tr className="table-light">
                                <th scope="col">物品分類</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productClass.map((val) => 
                            <tr className="table-dark">
                                <th onClick={()=>setQuery(val.ProductClass)} scope="row">{val.ProductClass}</th>
                            </tr>     
                            )}
                        </tbody>
                    </table>
                    </div>
                    <div className='col-10 d-flex flex-wrap'>
                        {products.map((product)=>(<Item key={product.ProductID} product={product}/>))}
                    </div>
                </div>
            </div>
        ))
};
export default Home;
/*
useEffect(()=>{ 
    const fetchData = async () =>{
        try{
        setLoading(true);
        const {data} = await axios.get('/api/product');
        setProducts(data);
        setLoading(false);
        }catch(err){
        console.log(err)
        }
    };
    fetchData();
},[]);
*/