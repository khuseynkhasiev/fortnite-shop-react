import './basketItem.css';
function BasketItem(props){
    const {
        name,
        id,
        price,
        quantity,
        removeFromBasket,
        incrementBasket,
        decrementBasket,
    } = props;

    return (
        <li className="collection-item">
            {name} <span className="material-icons basket-item__quantity" onClick={() => decrementBasket(id)}>remove
            </span> x{quantity}
            <span className="material-icons basket-item__quantity" onClick={() => incrementBasket(id)}>add</span>
            = {price * quantity}
            <span className="secondary-content basket-item__" onClick={() => removeFromBasket(id)}>
                <i className="material-icons">clear</i>
            </span>
        </li>
    )
}
export default BasketItem;