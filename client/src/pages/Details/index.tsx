import { useParams } from 'react-router-dom';
import { ItemDetails } from './components';
import './details.scss'
import { Breadcrumb } from '@components/Breadcrumb';
import { useGetItemDetails } from '../../hooks/useGetItemDetails';

const Details = () => {
   const { id } = useParams();

   const { data, isLoading, isError } = useGetItemDetails(id)

   const emptyPage = !id || (!isLoading && !data) || isError

  if (emptyPage) {
    return (<></>)
  }

   const item = data?.item

   return (
     <main className='details__container'>
       {/* <Breadcrumb />*/}
       {item && <ItemDetails item={item}/>}
     </main>
    )
};

export default Details;