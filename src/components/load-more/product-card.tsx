import './index.css'
export const ProductCard = ({product}: any) => {
    return(
        <div className="card">
            <img src={product.images[0]} alt={product.title}  />
            <p>{product.title}</p>
        </div>
    )
}