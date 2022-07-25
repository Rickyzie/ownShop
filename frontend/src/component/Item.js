function Item (prop){
    const {product} = prop ;
    return (
        <>
            <div className="card border-light m-2 flex-fill" style={{maxWidth: "258px"}}>
                <img src={product.Image} className="card-img-top" alt="..."/>
                <div className="card-body d-flex justify-content-center p-0">
                    <h4 className="card-title">{product.ProductName}</h4>
                </div>
                <div className="card-body d-flex justify-content-center p-0">
                    <h2 className="card-text">TWD{product.Price}</h2>
                </div>
                <div className="card-body d-flex justify-content-center p-0">
                <button type="button" className="btn btn-outline-light">BUY</button>
                <button type="button" className="btn btn-outline-light">DETAIL</button>
                </div>
            </div>
        </>
    )
};
export default Item;