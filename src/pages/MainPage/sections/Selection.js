import React,{useMemo} from 'react';
import ImageCarousel from '../../../components/ImageCarousel/ImageCarousel';

const Selection = ({photoList,likedList,setLikedList,autoPlay}) => {
    // const {photoList,likedList}=states;
    // const {setLikedList}=methods
    

    return useMemo(()=> {
        return(

            <section id="selection" style={{minHeight:"30vh"}}>
                <ImageCarousel setLikedList={setLikedList} likedList={likedList} photoList={photoList} autoPlay={autoPlay}/>
            </section>
        );
    },[likedList,photoList,autoPlay,setLikedList])
}

export default Selection;
