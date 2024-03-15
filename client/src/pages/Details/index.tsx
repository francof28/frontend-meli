import { useParams } from 'react-router-dom';
import { ItemDetails } from './components';
import './details.scss'
import { Breadcrumb } from '@components/Breadcrumb';
import { useGetItemDetails } from '../../hooks/useGetItemDetails';
import { useGetCategories } from '../../hooks/useGetCategories';

const Details = () => {
   const { id } = useParams();

   const { data, isLoading, isError } = useGetItemDetails(id)

   const emptyPage = !id || (!isLoading && !data) || isError

   const item = data?.item

   const { data: category } = useGetCategories(item?.category_id)

   const categories = [category?.name, ...(category?.children_categories.map((child: any) => child.name) || [])].slice(0, 4);

   if (emptyPage) {
      return (<></>)
   }

   return (
     <main className='details__container'>
       {category && <Breadcrumb categories={categories}/>}
       {item && <ItemDetails item={item}/>}
     </main>
    )
};

export default Details;