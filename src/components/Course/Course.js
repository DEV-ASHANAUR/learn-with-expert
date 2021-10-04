import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Course.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
const Course = () => {
    const [course,setCourse] = useState([]);
    useEffect(()=>{
        fetch('course.JSON')
        .then(res => res.json())
        .then(data => setCourse(data));
    },[])
    return (
        <>
            <Breadcrumb pageName='Our Courses' formPage='Home' toPage='Course'></Breadcrumb>
            <div className='service-area my-4'>
                <div className="container">
                    <h2 className='heading'>Our Courses</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                        {
                            course.map(course => <Service key={course.key} course={course}></Service>)
                        }
                    </div> 
                </div>
            </div>
        </>
        
    );
};

export default Course;