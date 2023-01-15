import './cart.css';
function Cart(props) {
    const {quatity = []} = props;
    return (
        <div className="cart blue accent-2 white-text">
            <i className="material-icons cart__icon">local_grocery_store
            </i>
            { quatity ? (<span>{quatity}</span>) : null}
        </div>
    )
}

export default Cart;