import './breadcrumb.scss'

type Props = {
    categories: string[] | undefined
}

export const Breadcrumb: React.FC<Props> = ({categories}) => {
    return (
        <div className='itemlist__breadcrumb'>
            {categories?.map((category, index) => {
                return <p key={category}>&nbsp;{category}&nbsp;{(index !== categories.length - 1) && <span>&gt;</span>}    </p>
            })}
        </div>
    )
}