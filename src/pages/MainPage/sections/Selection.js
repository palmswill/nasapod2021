import React from 'react';
import ImageCarousel from '../../../components/ImageCarousel/ImageCarousel';

const Selection = ({states,methods,autoPlay}) => {
    const {photoList,likedList}=states;
    const {setLikedList}=methods;

    return (
        <section id="selection" style={{minHeight:"30vh"}}>
            <ImageCarousel setLikedList={setLikedList} likedList={likedList} photoList={photoList} autoPlay={autoPlay}/>
        </section>
    );
}

export default Selection;
