import React from 'react';
import Description from '../../../GlobalComponents/Description';
import Title from '../../../GlobalComponents/Title';


const CourseItem = ({img, name, description}) =>  (
    <div className='course-item'>
        <img src={img} />
        <Title text={name}></Title>
        <Description text={description} />
    </div>
);

export default CourseItem;