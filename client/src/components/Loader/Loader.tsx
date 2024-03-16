import './loader.scss';

export const Loader = () => {
    return (
    <div className='loader__container' role='alert' aria-busy='true' aria-label='Cargando'>
        <div className='loader'>
        </div>
    </div>
    )
}