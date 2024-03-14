import './results.scss'
import { Item } from "./components";
import { Breadcrumb } from '@components/Breadcrumb';

const Results = () => {
   return (
   <main className='itemlist__container'>
     <Breadcrumb />
     <Item />
     <Item />
     <Item />
    </main>)
};

export default Results;