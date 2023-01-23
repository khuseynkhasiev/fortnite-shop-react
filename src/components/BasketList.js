import BasketItem from "./BasketItem";
import './basketList.css'
function BasketList(props){
    const {
        order = [],
        handleBasketPopup,
        removeFromBasket,
        decrementBasket,
        incrementBasket,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0)

    return (
            <ul className="collection basket-list">
                <li><a className="collection-item active">Корзина</a></li>
                { order.length ?
                    order.map((item) => <BasketItem
                        key={item.id}
                        {...item}
                        removeFromBasket={removeFromBasket}
                        decrementBasket={decrementBasket}
                        incrementBasket={incrementBasket}
                    />) :
                    <li className="collection-item">Корзина пуста</li>
                }
                <li><a className="collection-item active">Общая стоимость: {totalPrice} руб.</a></li>
                <span className="material-icons large basket-list__close" onClick={handleBasketPopup}>close</span>
            </ul>
    )
}
export default BasketList;