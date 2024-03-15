import { Item } from '../../../../services/getItems';
import './item.scss'

type Props = {
    item: Item
}

export const ItemCard: React.FC<Props> = ({ item }) => {
    const {title, price, picture, free_shipping, condition} = item

    return (
        <div className="item__container">
            <img className='item__image' src={picture} />
            <div className='item__description'>
                <div className='item__location'>
                    <h3>$ {price.amount}</h3>
                </div>
                <p>{title}</p>
                {/* <p>Completo unico</p> */}
            </div>
        </div>
    )
};