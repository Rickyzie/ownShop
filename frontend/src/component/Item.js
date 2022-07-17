function Item (){
    return (
        <>
            <div className="card border-light m-2 flex-fill" style={{maxWidth: "258px"}}>
                <img src="https://picsum.photos/id/180/3008/2008" class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">Light card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </>
    )
};
export default Item;