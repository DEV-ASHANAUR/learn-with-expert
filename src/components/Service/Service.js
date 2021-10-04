import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {name,image,description,duration,enroll,rating,total} = props.course;
    return (
        <>
            <div className="col">
                <div className="card h-100 card-wrapper" style={{background:'#fff'}}>
                    <div className='img-wrapper'>
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star rate-color"
                            fullSymbol="fas fa-star rate-color"
                            readonly
                        />
                        <span className='px-3'>({total} review)</span>
                        <p className="card-text">{description}
                        <Link to='/course' className='read-more'>read more</Link>
                        </p>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <p className='ps-2'><i className="far fa-clock"></i> <span>{duration}</span></p>
                            <p className='pe-2'><i className="far fa-user"></i> <span>{enroll}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Service;