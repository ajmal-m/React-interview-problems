import { FaStar } from "react-icons/fa";
import './index.css';
import { useState } from "react";


export const Stars = ({ numOfStars = 6} : {
    numOfStars: number
}) => {

    const [hovered, setHovered] = useState(-1);
    const [selectedStar, setSelectStar] = useState(-1);
    return <div>
        {
        [...new Array(numOfStars)].map((_,index) => (
            <FaStar 
                className={`btn-size ${hovered >= index && 'active'}`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(selectedStar)}
                onClick={() => setSelectStar(index)}
            />
        ))
}
    </div>
}