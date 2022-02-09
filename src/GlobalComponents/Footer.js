import React from 'react';
import { Link } from 'react-router-dom';


const Footer = (props) => (
    <footer><Link to="/about"><h1>{props.text}</h1></Link></footer>
);


export default Footer;


