import './shop.css';
import {useEffect, useState} from "react";
import {API_KEY, API_URL} from "../config";
import GoodsList from "./GoodsList";
import Preloader from "./Preloader";
import Cart from "./Cart";
import BasketList from "./BasketList";
function Shop() {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [onBasketPopup, setOnBasketPopup] = useState(false);

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            }
        })
            .then((res) => res.json())
            .then((data)=> {
                setGoods(data.featured);
                setLoading(false);
                console.log(data.featured);
            })
            .catch((data) => console.log(data.error))
    },[])

    function addToBasket(item) {
        const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    }
                } else {
                    return orderItem;
                }
            })
            setOrder(newOrder);
        }
    }
    function removeFromBasket(itemId){
        const newOrder = order.filter(el => el.id !== itemId);
        setOrder(newOrder);
    }
    function handleBasketPopup(){
        setOnBasketPopup(!onBasketPopup);
    }

    function incrementBasket(itemId){
        const newOrder = order.map((el) => el.id === itemId ? {...el, quantity: el.quantity + 1} : el)
        setOrder(newOrder);
    }
    function decrementBasket(itemId){
        const newOrder = order.map((el) => el.id === itemId ? {...el, quantity: el.quantity > 0 ? el.quantity - 1 : el.quantity} : el)
        setOrder(newOrder);
    }

    return (
        <>
            <main className="main">
                {
                    onBasketPopup &&
                    <BasketList
                        order={order}
                        handleBasketPopup={handleBasketPopup}
                        removeFromBasket={removeFromBasket}
                        incrementBasket={incrementBasket}
                        decrementBasket={decrementBasket}
                    />
                }
                <Cart
                    quantity={order.length}
                    handleBasketPopup={handleBasketPopup}
                />
                {loading ? <Preloader /> : <GoodsList
                    goods={goods}
                    addToBasket={addToBasket}
                />}
            </main>
        </>
    )
}

export default Shop;