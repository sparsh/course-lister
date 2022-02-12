import React, { useEffect, useRef, useState } from 'react';


const SectionHeader = (props) => {
    const handleClick = () => {
        props.onClickSection(props.index);
    }

   return(<h3 onClick={handleClick} className="section">{props.text}</h3>)
};


export default SectionHeader;