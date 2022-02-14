import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Heading from '../../GlobalComponents/Heading';
import CourseItem from './component/CourseItem';
import SectionList from './component/SectionList';
import './style.css'
import { getSectionList } from './utils';

const json = require('../../asset/CourseList.json')


const CourseList = () => {
    const courseListRef = useRef([]);
    const sectionList =  getSectionList(json.courseList);

    const sectionName = useSelector(state => state);

    useEffect(() => {
        console.log("The section name is ", sectionName);

        courseListRef.current[sectionName].scrollIntoView();
    }, [sectionName])

    return (
        <div className="course-list-container">
            <SectionList sectionList={sectionList} />
            {
                    sectionList.map((section, index) => (
                        <div ref={(ref) => {
                            courseListRef.current[index] = ref;
                        }}>
                            <Heading text= {section.sectionName} />
                            <div className='course-item-container response-course-item'>
                                {section.courseList.map((item, index) => <CourseItem  {...item} />)}
                            </div>
                        </div>
                    ) )
            }
            
        </div>
    )

}

export default CourseList;