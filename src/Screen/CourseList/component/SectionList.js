import React from 'react';
import SectionHeader from '../../../GlobalComponents/SectionHeader';


const SectionList = ({sectionList, onClickSection}) => {
    return <div className='section-list responsive-section-list'>{sectionList.map((section, index) => <SectionHeader onClickSection={onClickSection} index={index} text={section.sectionName} />)}</div>
}

export default SectionList;