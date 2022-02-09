import React from 'react';
import Heading from '../../GlobalComponents/Heading';
import CourseItem from './component/CourseItem';
import './style.css'

const json = require('../../asset/CourseList.json')


const CourseList = () => {
    const sectionList = json.section;
    return (
        <div className="course-list-container">
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