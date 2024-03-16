import { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { paths } from "@router/paths";

import './navbar.scss';

export const Navbar = () => {
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (searchValue && searchValue.trim() !== '') return navigate(`/items?search=${searchValue}`)
    }

    return (
        <header className='navbar'>
            <div className='container__search'>
                <Link to={paths.home}>
                    <img className='logo__meli' src='/assets/Logo_ML2x.png' alt='Logo de MercadoLibre'
                        loading='lazy'
                        width={50}
                        height={32}
                    />
                </Link>
                <form className='container__input' onSubmit={handleSubmit}>
                    <input className='input__search' type='text'
                        value={searchValue}
                        placeholder='Nunca dejes de buscar'
                        aria-label='Buscar en MercadoLibre'
                        onChange={handleChange}
                    />
                    <button className='button__search' type='submit' title='Buscar' aria-label='Buscar'>
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