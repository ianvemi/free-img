import React, {Fragment, useState} from 'react';

const Image = ({element, addFull, addUrlFull}) => {

    const {webformatURL, largeImageURL, likes, comments, user, userImageURL, pageURL } = element;
    

    const fullSize = (largeImageURL) =>{
        addFull(true);
        addUrlFull(largeImageURL);
    }
    return ( 
        <Fragment>
        <div className="img">
        <img src={webformatURL} alt="img" className="photo"></img>
        <div className="actions">
        <div className="info">
        <i className="flaticon-like tag"> {likes}</i>
        <i className="flaticon-oval-black-speech-bubble tag"> {comments}</i>
        <i className="tag"><img src={userImageURL} className="img-profile" alt="user-img"></img>by: {user}</i>
        </div>
        <div className="options">
        <button className="action">
        <a href={pageURL} target="blank"><i className="flaticon-download-circular-button" ></i></a>
        </button>
        <button className="action"
        onClick={()=> fullSize(largeImageURL)}
        >
        <i className="flaticon-full-size"></i>
        </button>        
        
        </div>
        </div>
        

        </div>
            
        </Fragment>
        
     );
}
 
export default Image;