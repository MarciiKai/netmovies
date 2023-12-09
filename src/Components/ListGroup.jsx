import React from 'react';
import { useState } from 'react';

function ListGroup( ){
  let items =[ 'latest', '2020', '2021', '2022', '2023']
  const [selectedIndex ,setSelectedIndex] = useState(-1);
  
  return(
    <>
      <h1>Months</h1>
      {items.length === 0 && <p>List not found</p>}
      <ul className="list-group">
     {items.map((item, index) =>
       <li className={selectedIndex === index ?
         "list-group-item active" : 
         "list-group-item"} 
       key= {item}
       onClick={() => setSelectedIndex(index)
       }>{item}</li>)} 
      </ul>
    </>
        ) ;

}


export default ListGroup;
