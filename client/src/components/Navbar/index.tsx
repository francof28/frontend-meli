import './navbar.scss'

export const Navbar = () => {

    return (
        <header className='navbar'>
            <div className='container__search'>
                <img className='logo__meli' src='/assets/Logo_ML2x.png' alt='Logo de MercadoLibre'
                    loading='lazy'
                    width={50}
                    height={32}
                />
                <input className='input__search' type='text'
                    placeholder='Nunca dejes de buscar'
                    aria-label='Buscar en MercadoLibre'
                />
                <button className='button__search' type='submit' title='Buscar'>
                    <img src='/assets/ic_Search2x.png' alt='Input logo lupa de búsqueda'
                        loading='lazy'
                        width={12}
                        height={12}
                    />
                </button>
            </div>
        </header>
    )
};