import { ChangeEvent, useState } from 'react';
import './navbar.scss'
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (searchValue) return navigate(`/items?search=${searchValue}`)
    }

    return (
        <header className='navbar'>
            <div className='container__search'>
                <img className='logo__meli' src='/assets/Logo_ML2x.png' alt='Logo de MercadoLibre'
                    loading='lazy'
                    width={50}
                    height={32}
                />
                <form className='container__input' onSubmit={handleSubmit}>
                    <input className='input__search' type='text'
                        value={searchValue}
                        placeholder='Nunca dejes de buscar'
                        aria-label='Buscar en MercadoLibre'
                        onChange={handleChange}
                    />
                    <button className='button__search' type='submit' title='Buscar'>
                        <img src='/assets/ic_Search2x.png' alt='Input logo lupa de búsqueda'
                            loading='lazy'
                            width={12}
                            height={12}
                        />
                    </button>
                </form>
            </div>
        </header>
    )
};