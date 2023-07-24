
const products = (props) => {
    return (
        <div>
        <p>{props.img}</p>
        <p>{props.name}</p>
        <p>{props.price}</p>
        <input type="button" value="BUY NOW" />
    </div>
);
}
export default products;