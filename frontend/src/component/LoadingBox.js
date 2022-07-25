function LoadingBox (){
    const style = {
        position: "absolute",
        top:"50%",
        left: "48%",
        transform: "translate(-50%, -50%)"
    };
    return (
        <div style={style}>
            <div  className="spinner-grow text-light" role="status">
            </div>
        </div>
    )
};
export default LoadingBox;