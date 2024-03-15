import { useNavigate } from 'react-router-dom';

import { Item } from '@services/getItems';
import { formatPrice } from '@utils/index';

import './itemCard.scss'

type Props = {
    item: Item
}

export const ItemCard: React.FC<Props> = ({ item }) => {
    const navigate = useNavigate()

    const {id, title, price, picture, free_shipping} = item

    const onClick = () => {
        return navigate(`/items/${id}`)
    }

    return (
        <div className="item__container">
            <img className='item__image' src={picture} alt={title} onClick={onClick}/>
            <div className='item__description'>
                <div className='item__location'>
                    <div className='item__price'>
                        <h3> {formatPrice(price)}  </h3>
                        {free_shipping && <img src='/assets/ic_shipping.png' alt='Icono de Envío gratis' width={20} height={20}/>}
                    </div>
                </div>
                <p className='item__title' onClick={onClick}>{title}</p>
            </div>
        </div>
    )
};