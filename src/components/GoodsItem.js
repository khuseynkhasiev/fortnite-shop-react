import './goodsItem.css';
function GoodsItem(props) {
    const {id, name, description, price, full_background} = props;

    return (
        <div className="card" key={id}>
            <div className="card-image">
                <img src={full_background} alt={name}/>
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button className="btn">Купить</button>
                <span className="card-title right">{price} руб.</span>
            </div>
        </div>
    )
}

export default GoodsItem;