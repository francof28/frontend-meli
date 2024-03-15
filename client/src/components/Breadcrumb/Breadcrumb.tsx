import './breadcrumb.scss'

type Props = {
    categories: string[] | undefined
}

export const Breadcrumb: React.FC<Props> = ({categories}) => {
    return (
        <div className='itemlist__breadcrumb'>
            Electrónica audio y video  &gt;  iPod  &gt;  Reproductores  &gt;  iPod Touch  &gt;  32gb
        </div>
    )
}