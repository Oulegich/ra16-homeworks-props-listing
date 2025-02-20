import cs from 'classnames';

import getСurrency from '../utils/getСurrency';
import getHighlightingRemainder from '../utils/getHighlightingRemainder';

const Item = ({ item}: {item: IItem}) => {
    return (
        <div className="item-elem">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage?.url_570xN} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{item.title}</p>
                <p className="item-price">{getСurrency(item.currency_code, item.price)}</p>
                <p className={cs("item-quantity", getHighlightingRemainder(item.quantity))}>{item.quantity}</p>
            </div>
        </div>
    )
}

export default Item