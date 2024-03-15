import { Item } from '@services/getItemById';
import { formatPrice } from '@utils/index';

import './itemDetails.scss';

type Props = {
    item: Item;
}

const conditions: Record<string,string> = {
    'new': 'Nuevo',
    'used': 'Usado'
}

export const ItemDetails: React.FC<Props> = ({ item }) => {
    const {title, price, picture, sold_quantity, description, condition} = item;

    return (
        <section className="itemdetails__container">
            <div className='item__container'>
                <img className='item__image' src={picture} alt={title}/>
                <div className='item__description'>
                    <p>{conditions[condition]} - {sold_quantity} vendidos</p>
                    <h4>{title}</h4>
                    <h3>{formatPrice(price)}</h3>
                    <button className='item__button' type='submit' title='Comprar'>
                        Comprar
                    </button>
                </div>
            </div>
            <div  className='item__disclaimer'>
                {description && <h3>Descripción del producto</h3>}
                <p>{description}</p>
            </div>
        </section>
    )
}