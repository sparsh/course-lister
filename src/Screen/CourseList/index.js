import React from 'react';
import Heading from '../../GlobalComponents/Heading';
import CourseItem from './component/CourseItem';
import SectionList from './component/SectionList';
import './style.css'
import { getSectionList } from './utils';

const json = require('../../asset/CourseList.json')


const CourseList = () => {
    const sectionList =  getSectionList(json.courseList);
    return (
        <div className="course-list-container">
            <SectionList sectionList={sectionList} />
            {
                    sectionList.map((section, index) => (
                        <div>
                            <Heading text= {section.sectionName} />
                            <div className='course-item-container response-course-item'>
                                {section.courseList.map(item => <CourseItem {...item} />)}
                            </div>
                        </div>
                    ) )
            }
            
        </div>
    )

}

export default CourseList;