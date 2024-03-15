import './results.scss'
import { ItemCard } from "./components";
import { Breadcrumb } from '@components/Breadcrumb';
import { useLocation } from 'react-router-dom';
import { useGetItems } from '../../hooks/useGetItems';

const Results = () => {
  const urlParams = new URLSearchParams(useLocation().search).get('search')

  const { data, isLoading, isError } = useGetItems(urlParams)

  const emptyPage = !urlParams || (!isLoading && !data) || isError

  if (emptyPage) {
    return (<></>)
  }
  console.log('data: ', data)

  const categories = data?.categories
  const items = data?.items

  return (
  <main className='itemlist__container'>
    <Breadcrumb categories={categories}/>
    {items?.map((item) => <ItemCard key={item.id} item={item} />)}
  </main>)
};

export default Results;