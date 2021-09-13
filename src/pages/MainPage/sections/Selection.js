import React from 'react';
import ImageCarousel from '../../../components/ImageCarousel/ImageCarousel';

const Selection = ({states,autoPlay}) => {
    const photoList=states.photoList;

    return (
        <section id="selection" style={{height:"30vh"}}>
            <ImageCarousel photoList={photoList} autoPlay={autoPlay}/>
        </section>
    );
}

export default Selection;
