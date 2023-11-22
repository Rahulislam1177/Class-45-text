import React from 'react';
import Father from '../Father/Father';
import Uncal from '../Uncal/Uncal';
import Unti from '../Unti/Unti';

const GrandFather = () => {


    return (
     <div>
        <h1>Grand Father</h1>
      
           
      <div className="common flex">
        <Father></Father>
         <Uncal></Uncal>
         <Unti></Unti>
     </div>
     </div>
    );
};

export default GrandFather;