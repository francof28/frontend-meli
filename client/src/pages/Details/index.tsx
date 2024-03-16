import { useParams } from 'react-router-dom';

import { Breadcrumb, Loader, ErrorPage } from '@components/index';

import { ItemDetails } from './components';

import { useGetCategories, useGetItemDetails } from '@hooks/index';

import './details.scss';

const Details = () => {
   const { id } = useParams();

   const { data, isLoading, isError } = useGetItemDetails(id)

   const item = data?.item

   const { data: category, isLoading: isLoadingCategory, isError: isErrorCategory } = useGetCategories(item?.category_id)

   const categories = [category?.name, ...(category?.children_categories.map((child: any) => child.name) || [])].slice(0, 4);

   if (isLoading || isLoadingCategory) {
    return <Loader />
   }

   if (isError || isErrorCategory) {
    return <ErrorPage />
   }

   return (
     <section className='details__container'>
       {category && <Breadcrumb categories={categories}/>}
       {item && <ItemDetails item={item}/>}
     </section>
    )
};

export default Details;