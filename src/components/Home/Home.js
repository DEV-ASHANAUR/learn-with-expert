import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

import Slider from '../Slider/Slider';
const Home = () => {
    const [course,setCourse] = useState([]);
    //fetch course data
    useEffect(()=>{
        fetch('course.JSON')
        .then(res => res.json())
        .then(data => setCourse(data.slice(0, 4)));
    },[])
    return (
        <div>
            <Slider></Slider>
            <div className='service-area my-4'>
                <div className="container">
                    <h2 className='heading'>Our Courses</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                        {
                            course.map(course => <Service key={course.key} course={course}></Service>)
                        }
                    </div>
                    {/* view more button */}
                    <div className="view-more my-5">
                        <Link to='/course'>
                            <button className='more-btn'>view more</button>
                        </Link>
                    </div>     
                </div>
            </div>
        </div>
    );
};

export default Home;