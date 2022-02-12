import React, { useRef, useState } from 'react';
import Heading from '../../GlobalComponents/Heading';
import CourseItem from './component/CourseItem';
import SectionList from './component/SectionList';
import './style.css'
import { getSectionList } from './utils';

const json = require('../../asset/CourseList.json')


const CourseList = () => {
    const courseListRef = useRef([]);
    const sectionList =  getSectionList(json.courseList);
    // const [clickedSection, setClickedSection] = useState();

    const onClickSection = (sectionIndex) => {
        console.log("the clicked section index is ", sectionIndex);
        console.log("The ref is ", courseListRef);
        courseListRef.current[sectionIndex].scrollIntoView();
        // setClickedSection(sectionIndex)
    }

    return (
        <div className="course-list-container">
            <SectionList onClickSection={onClickSection} sectionList={sectionList} />
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