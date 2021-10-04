import React from 'react';
import { Link } from 'react-router-dom';
import './Slider.css';
const Slider = () => {
    return (
        <div className='bg-banner'>
            <div className='banner-overly'>
                <h5 className='text-center'>START LEARNING FROM HOME</h5>
                <h1>Connect With Our Expert And Start Learning Today</h1>
                <p>We are providing high-quality online courses to improve your skill. Our all instructors are highly experienced and experts.</p>
                <div className='button-area'>
                    <Link to='/course'>
                        <button className='btn-course'>Find Courses</button>
                    </Link>
                    <Link to='/course'>
                    <button className='btn-explore'>Explore More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Slider;