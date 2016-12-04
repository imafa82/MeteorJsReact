// Creaiamo la nostra lista di immagini in questo componente

// Importiamo prima di tutto la libreria di React
import React from 'react';
import ImageDetail from './image_detail';


// Creiamo il nostro componente

//const ImageList = () =>{
  //  const RenderedImages = IMAGES.map(function(image){
    //    return <ImageDetail key={image.title} image={image} />
   // });
const ImageList = (props) =>{
    // Eliminare immagini con link rotti
    const validImages = props.images.filter(image => !image.is_album);
    const RenderedImages = validImages.map(image =>
        <ImageDetail key={image.title} image={image} />
    );
    return(
        <ul className="media-list list-group">
            {RenderedImages}
        </ul>
    );
};


// Esportiamo il nostro componente
export default ImageList;