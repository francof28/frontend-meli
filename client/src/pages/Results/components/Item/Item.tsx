import './item.scss'

export const Item = () => {
    return (
        <div className="item__container">
            <img className='item__image' src='https://www.cronista.com/files/image/458/458270/62631239f36c9.jpg' />
            <div className='item__description'>
                <div className='item__location'>
                    <h3>$ 1.980</h3>
                    <p>Capital federal</p>
                </div>
                <p>Apple ipod touch 6gb negro igual a nuevo</p>
                <p>Completo unico</p>
            </div>
        </div>
    )
};