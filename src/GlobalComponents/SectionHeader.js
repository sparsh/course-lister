import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSectionName } from '../store';


const SectionHeader = (props) => {

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setSectionName(props.index));
    }

   return(<h3 onClick={handleClick} className="section">{props.text}</h3>)
};


export default SectionHeader;