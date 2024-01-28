import React, {useState} from 'react';
import "./Collection.css";

const CollectionImage = ({images}) => {

    return (
        <div>
            <div class="collection-image-wrapper">
                {
                    images.map(({ img, caption}) => {
                        return (
                            <>
                                <div className="item">
                                <div className="polaroid">
                                    <img src={img}/>
                                    <div className="caption">{caption}</div>
                                </div>
                                </div>
                            </>
                        )
                    })
                }
                </div>
        </div>
    );
}

export default CollectionImage;