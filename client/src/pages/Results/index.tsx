import { useLocation } from 'react-router-dom';

import { Breadcrumb } from '@components/Breadcrumb';
import { ItemCard } from "./components";

import { useGetItems } from '@hooks/index';

import './results.scss'

const Results = () => {
  const urlParams = new URLSearchParams(useLocation().search).get('search')

  const { data, isLoading, isError } = useGetItems(urlParams)

  const emptyPage = !urlParams || (!isLoading && !data) || isError

  if (emptyPage) {
    return (<></>)
  }

  const categories = data?.categories
  const items = data?.items

  return (
  <main className='itemlist__container'>
    <Breadcrumb categories={categories}/>
    {items?.map((item) => <ItemCard key={item.id} item={item} />)}
  </main>)
};

export default Results;