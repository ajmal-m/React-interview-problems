import './index.css';
export const Pagination = ({
    len = 0,
    image
}: {
    len:number,
    image:number
}) => {
    return (
        <div className="pagination-container">
            {
                [...Array(len)].map((_, index) => (
                    <div className={`pagination-hole ${ index == image && 'pagination-active'}`} key={index}>
                    </div>
                ))
            }
        </div>
    )
}