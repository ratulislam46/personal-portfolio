import React from 'react';
import Frontend from './Frontend';
import Backend from './Backend';
import Tools from './Tools';
import TypeWriter from '../../Components/Typewriter/TypeWriter';

const Skills = () => {
    return (
        <div>
            <h1 className='text-center text-2xl md:text-4xl lg:text-5xl text-base-content font-bold'>
                M
                <TypeWriter text={'y Technical Skills & Expertise'}></TypeWriter>
            </h1>
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