import { FaChevronCircleLeft , FaChevronCircleRight} from "react-icons/fa";
import './index.css'

export const Arrow = ({
    type,
    goTo,
    style
}: {
    type: 'left' | 'right',
    goTo: () => any,
    style: string
}) => {
    return (
        <>
        {
            type == 'right' ? (
                <FaChevronCircleRight onClick={() => goTo()}  className={style}/>
            ) : (
                <FaChevronCircleLeft  onClick={() => goTo()} className={style}/>
            )
        }
        </>
    )
}