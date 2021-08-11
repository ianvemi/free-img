import React, { Fragment} from 'react';

const Form = ({text, addText}) => {

    
  

 //FUNCTION SUBMIT & FORMAT INPUT
    // const submit = (e) =>{
    //     e.preventDefault();
    //     if(text === ''){
    //         setError(true);
    //         return
    //     }
    //     // let apiText = text.replace(/ /g, "+");
    //     // reqImg(apiText);
    //     addText(text);

    // }

    // const reqImg = async(apiText) => {
    //     const apikey = '22553841-10fbcb7824b9ed5ff00466b49';
    //     const url = `https://pixabay.com/api/?key=${apikey}&q=${apiText}&image_type=photo`;
    //     const api =  await fetch(url);
    //     const data = await api.json();
    //     console.log(data);
    //   }

    //   const reqVideo = async(apiText) => {
    //     const apikey = '22553841-10fbcb7824b9ed5ff00466b49';
    //     const url = `https://pixabay.com/api/videos/?key=${apikey}&q=${apiText}`;
    //     const api =  await fetch(url);
    //     const data = await api.json();
    //     console.log(data);
    //   }


      
    //SAVING INPUT
    const input = (e) => {
        addText(e.target.value);
    }



    return ( 
        <Fragment>
               <form
        // onSubmit={submit}
        >
            <input
        type="text"
        name="input"
        placeholder="Search images, like: storm, forest, sports, etc."
        onChange={input}
        >

        </input>

        {/* <button
        className="submit"
        type="submit"
        > <i className="flaticon-loupe"></i>
        </button> */}

        </form>
        {}
        {/* error
        ? <div className="error">Oh no!, Your search was not found or  is empty, try it with another words.</div>
        :<div className="ok">Let´s find your next image.</div> */}
        </Fragment>
     
       
        
     );
}
 
export default Form;