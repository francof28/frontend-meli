import { formatPrice } from '../../../../utils';
import { Item } from '../../../../services/getItems';
import './itemCard.scss'

type Props = {
    item: Item
}

export const ItemCard: React.FC<Props> = ({ item }) => {
    const {title, price, picture, free_shipping} = item

    return (
        <div className="item__container">
            <img className='item__image' src={picture} alt={title}/>
            <div className='item__description'>
                <div className='item__location'>
                    <div className='item__price'>
                        <h3> {formatPrice(price)}  </h3>
                        {free_shipping && <img src='/assets/ic_shipping.png' alt='Icono de Envío gratis' width={20} height={20}/>}
                    </div>
                </div>
                <p>{title}</p>
            </div>
        </div>
    )
};