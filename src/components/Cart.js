import './cart.css';
function Cart(props) {
    const {quantity = 0} = props;
    return (
        <div className="cart blue accent-2 white-text">
            <i className="material-icons cart__icon">local_grocery_store
            </i>
            { quantity ? (<span className="cart__quantity">{quantity}</span>) : null}
        </div>
    )
}

export default Cart;