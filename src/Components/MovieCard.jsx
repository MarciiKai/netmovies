import React from 'react';
import { useState, useEffect, useContext } from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import contextPage from './ContextPage';

function movieCard({ movie }){
return(
    <motion.div
    initial ={{opacity: 0}}
    animate ={{opacity:1}}
    exit={{opacity:1}}>
    
    {/* <button onClick={BookmarkMovie}>{isBookmarked ? } */}
    {/* </button> */}

    </motion.div>
)
}
export default movieCard();