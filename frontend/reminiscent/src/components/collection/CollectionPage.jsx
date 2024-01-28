import React, { useState } from 'react'
import Button from '../button';
import CollectionImage from './CollectionImage';
import "./Collection.css";

const CollectionPage = () => {
    const [query, setQuery] = useState();
    const [images, setImages] = useState([]);


    const handleChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
        setImages([
            {
                img: "https://image.ibb.co/mmyvrc/anniversary_balloons_birthday_68369.jpg",
                caption: "12/12/12" 
            },
            {
                img: "https://image.ibb.co/mmyvrc/anniversary_balloons_birthday_68369.jpg",
                caption: "" 
            },
            {
                img: "https://image.ibb.co/mmyvrc/anniversary_balloons_birthday_68369.jpg",
                caption: "" 
            }
        ])
    }

    return (
        <div className='collection-container'>
            <h4 className="project-name title">rememories.</h4>
            <div className='title collection-title collection-padding'>Enter a tag here:</div>
            <input type='text' className='collection-input' value={query} onChange={handleChange}/>
            <div className='collection-padding'>
                <Button>Submit</Button>            
            </div>
            <div>
                <CollectionImage images={images} /> 
            </div>
        </div>
    )
}

export default CollectionPage;