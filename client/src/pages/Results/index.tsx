import { useLocation } from 'react-router-dom';

import { Breadcrumb, Loader, ErrorPage } from '@components/index';

import { ItemCard } from "./components";

import { useGetItems } from '@hooks/index';

import './results.scss';

const Results = () => {
  const urlParams = new URLSearchParams(useLocation().search).get('search')

  const { data, isLoading, isError} = useGetItems(urlParams)

  if (isLoading) {
    return (<Loader />)
  }

  if (isError) {
    return <ErrorPage />
   }

  const categories = data?.categories
  const items = data?.items

  return (
    <section className='itemlist__container'>
      <Breadcrumb categories={categories}/>
      {items?.map((item) => <ItemCard key={item.id} item={item} />)}
    </section>
  )
};

export default Results;