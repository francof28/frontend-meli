import { ItemDetails } from './components';
import './details.scss'
import { Breadcrumb } from '@components/Breadcrumb';

const Details = () => {
   return (
     <main className='details__container'>
        <Breadcrumb />
        <ItemDetails />
     </main>
    )
};

export default Details;