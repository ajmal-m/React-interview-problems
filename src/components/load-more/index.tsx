import { useEffect, useState } from "react";
import { ProductCard } from "./product-card";

export const LoadMore = () => {
    const [products, setproducts] = useState([]);
    const [limit, setLimit] = useState(10);
    const getProducts = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
        const data = await res.json();
        setproducts(data.products)
    }

    useEffect( () => {
         getProducts();
    }, [limit])
    return(
        <div>
            <div className="card-container">
                {
                products.length &&  products.map((product, index) => (
                        <ProductCard product={product}/>
                    )) 
                }
            </div>
            <button onClick={() => setLimit((l) => l+10)}>ADD MORE</button>
        </div>
    )
}