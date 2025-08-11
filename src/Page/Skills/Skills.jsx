import React from 'react';
import Frontend from './Frontend';
import Backend from './Backend';
import Tools from './Tools';

const Skills = () => {
    return (
        <div>
            <h1 className='text-center text-3xl md:text-4xl lg:text-5xl text-base-content font-bold mt-12 mb-6'>My Technical Skills & Expertise</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div>
                    <Frontend></Frontend>
                </div>
                <div>
                    <Backend></Backend>
                </div>
                <div>
                    <Tools></Tools>
                </div>
            </div>
        </div>
    );
};

export default Skills;