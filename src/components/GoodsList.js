import GoodsItem from "./GoodsItem";
import './goodList.css';

function GoodsList(props){
    const {
        goods = [],
        addToBasket
    } = props;

    if (!goods.length) {
        return <h3>Nothing here</h3>
    }

    return (
        <div className="goods">
            {!goods.length
                ?
                <h3>Nothing here</h3>
                :
                goods.map(item => {
                return <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
            })}
        </div>
    )
}

export default GoodsList;