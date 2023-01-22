import './shop.css';
import {useEffect, useState} from "react";
import {API_KEY, API_URL} from "../config";
import GoodsList from "./GoodsList";
import Preloader from "./Preloader";
import Cart from "./Cart";
function Shop() {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);

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

    return (
        <>
            <main className="main">
                <Cart quantity={order.length} />
                {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />}
            </main>
        </>
    )
}

export default Shop;