import React, {Fragment} from 'react';
import Image from './Image';

const Container = ({response, addFull, addUrlFull}) => {

    return ( 
        <Fragment>
         <div className="content">
         {response.map( element => (
             <Image
                 key={element.id}
                 element ={element}
                 addFull = {addFull}
                 addUrlFull = {addUrlFull}
             />
         ))}
         </div>
        

        </Fragment>
       
     );
}
 
export default Container;