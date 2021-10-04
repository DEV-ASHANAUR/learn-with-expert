import React, { useEffect, useState } from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Person from '../Person/Person';
import './About.css';

const About = () => {
    const[members,setMembers] = useState([]);
    useEffect(()=>{
        fetch('person.JSON')
        .then(res => res.json())
        .then(data => setMembers(data));
    },[]);
    return (
        <>
            <Breadcrumb pageName='About us' formPage='Home' toPage='About'></Breadcrumb>
            <div className="container">
                <h2 className='heading'>About Us</h2>
                <div className="row py-4">
                    <div className="col-md-6 mission-vission">
                        <h1>Our Mission</h1>
                    </div>
                    <div className="col-md-6 mission">
                        <p>We have two main objectives. One of them is creating a skilled work force and the other is the client's satisfaction. Our thought about skill is: A skilled worker is any worker who has special skill, training, knowledge, and (usually acquired) ability in their work. A skilled worker may have attended a college, university, or technical school. Or, a skilled worker may have learned their skills on the job-wikipedia. We never force to the client to understand us, instead we earn satisfaction by</p>
                    </div>
                </div>
                <div className="row py-4">
                    <div className="col-md-6 order-md-2 mission-vission">
                        <h1>our vision</h1>
                    </div>
                    <div className="col-md-6 order-md-1 mission">
                        <p>Our vision is to create adequate workplaces in the country and abroad to reduce unemployment and economic prosperity. Globally there are many opportunities has created from last 10 years. We are here to develop that opportunities to distribute among us. This way we can get more opportunities, job sectors, and hire skilled person all over the world. If he/she is not skilled but wan to join with us, then we are here to support technologically.</p>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <h2 className='heading'>Our Expert Instructor</h2>
                    <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                        {
                            members.map(member => <Person key={member.id} person={member}></Person>)
                        }
                    </div>
            </div>
        </>
    );
};

export default About;