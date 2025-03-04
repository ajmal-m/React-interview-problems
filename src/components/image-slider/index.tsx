import React, { useState } from "react"
import './index.css';
import {images} from './index.ts';
import { Arrow } from "./arrow.tsx";
import { Pagination } from "./pagination.tsx";
import { ImagePreview } from "./image-preview.tsx";


export const ImageSlider:React.FC = () => {
    const [image, setImage] = useState<number>(0);
    // Left moving function
    const gotLeft = (currentImage: number) : void => {
        !currentImage ? currentImage = images.length-1: currentImage -=1;
        setImage(currentImage)
    }

    // Right Moving function
    const goRight = (currentImage: number): void => {
        currentImage == images.length-1 ? currentImage = 0 : currentImage+=1;
        setImage(currentImage);
    }
    return (
        <div>
            <div style={{
                position:'relative'
            }} className="imagecontent">
                <ImagePreview image={image}/>
                <div >
                <Arrow type="left" goTo={ () => gotLeft(image)} style="leftarrow"/>
                <Arrow type="right" goTo={ () => goRight(image)} style="rightArrow"/>
                <Pagination len={images.length} image={image}/>
                </div>
            </div>
        </div>
    )
}