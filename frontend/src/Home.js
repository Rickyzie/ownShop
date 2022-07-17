import Header from './component/Header';
import Item from './component/Item';
import Sidebar from './component/Sidebar';
function Home (){
    return(
        <div className='container p-0'>
            <Header />
            <div className='row mt-3'>
                <div className='col-2'>
                    <Sidebar />
                </div>
                <div className='col-10 d-flex flex-wrap'>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        </div>
    )
};
export default Home;