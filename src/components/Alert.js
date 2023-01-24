import {useEffect} from "react";
import './alert.css';
function Alert(props) {
    const {
        name,
        closeAlert
    } = props;

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 2000);

        return () => {
            clearInterval(timerId);
        }
    }, [name])

    return (
        <div className="toast-container alert__container">
            <div className="toast">{name} добавлен в корзину</div>
        </div>
    )
}
export default Alert;