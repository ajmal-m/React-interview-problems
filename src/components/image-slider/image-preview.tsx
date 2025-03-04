import {images} from './index'
export const ImagePreview = ({
    image
}: {
    image:number
}) => {
    return(
        <img 
            src={images[image].src}
            alt=""  
            className="imagecontent"
        />
    )
}