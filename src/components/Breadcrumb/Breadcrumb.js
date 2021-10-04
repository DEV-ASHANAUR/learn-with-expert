import React from 'react';
import './Breadcrumb.css';
const Breadcrumb = (props) => {
    const {pageName,formPage,toPage} = props;
    return (
        <div className="course-bg">
            <div className='course-heading'>
                <h1>{pageName}</h1>
                <h2>{formPage} <i className="fas fa-arrow-right text-size"></i> {toPage}</h2>
            </div>
        </div>
    );
};

export default Breadcrumb;