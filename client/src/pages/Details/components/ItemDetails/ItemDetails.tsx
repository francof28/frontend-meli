import './itemDetails.scss'

export const ItemDetails = () => {
    return (
        <main className="itemdetails__container">
            <div className='item__container'>
                <img className='item__image' src='https://www.cronista.com/files/image/458/458270/62631239f36c9.jpg' />
                <div className='item__description'>
                    <p>Nuevo - 234 vendidos</p>
                    <h4>Deco reverse Sombrero oxford</h4>
                    <h3>$ 1.980</h3>
                    <button className='item__button' type='submit' title='Comprar'>
                        Comprar
                    </button>
                </div>
            </div>
            <div  className='item__disclaimer'>
                <h3>Descripción del producto</h3>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
            </div>
        </main>
    )
}