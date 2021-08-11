import React from 'react';

const Fullsize = ({urlFull, addFull}) => {

    const desactivate = () =>{
        addFull(false)
    }
    return ( 
        <div className="img-full">
            <img src={urlFull} alt="full-img"></img>
            <button 
            onClick={()=> desactivate()}
            className="close">&#x2b60;</button>
        </div>
     );
}
 
export default Fullsize;