import React from 'react';
import SectionHeader from '../../../GlobalComponents/SectionHeader';


const SectionList = ({sectionList}) => {
    return <div className='section-list responsive-section-list'>{sectionList.map(section => <SectionHeader text={section.sectionName} />)}</div>
}

export default SectionList;