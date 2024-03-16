import { useNavigate } from 'react-router-dom';

import './breadcrumb.scss';

type Props = {
    categories: string[] | undefined
}

export const Breadcrumb: React.FC<Props> = ({categories}) => {
    const navigate = useNavigate()

    return (
        <div className='itemlist__breadcrumb'>
            {categories && <p className='goback_breadcrumb' onClick={() => navigate(-1)}>Volver |&nbsp;</p>}
            {categories?.map((category, index) => {
                return <p key={category}>&nbsp;{category}&nbsp;{(index !== categories.length - 1) && <span>&gt;</span>}    </p>
            })}
        </div>
    )
}