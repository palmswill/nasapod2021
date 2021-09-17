import React,{useMemo} from 'react';
import ImageCarousel from '../../../components/ImageCarousel/ImageCarousel';

const Selection = ({photoList,likedList,setLikedList}) => {
    // const {photoList,likedList}=states;
    // const {setLikedList}=methods
    

    return useMemo(()=> {
        return(

            <section id="selection" style={{minHeight:"30vh"}}>
                <ImageCarousel autoPlay setLikedList={setLikedList} likedList={likedList} photoList={photoList} />
            </section>
        );
    },[likedList,photoList,setLikedList])
}

export default Selection;
