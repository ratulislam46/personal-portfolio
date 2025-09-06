import React from 'react';
import TypeWriter from '../../Components/Typewriter/TypeWriter';

const EducationQualification = () => {
    return (
        <div className='mx-2 md:mx-0'>
            <h1 className='text-center text-2xl lg:text-4xl text-base-content mb-8 font-bold'>
                E
                <TypeWriter text={'ducational Qualification'}></TypeWriter>
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-center md:justify-between'>

                <div data-aos="zoom-in-up" className='rounded-lg py-8 shadow-xl'>
                    <h1 className='font-bold text-xl'>Bachelor of Business Administration(BBA)</h1>
                    <p className='font-semibold text-xl'>National University, Bangladesh</p>
                    <p>(2022-23) 2<sup>nd</sup>Year -  Marketing</p>
                </div>

                <div data-aos="zoom-in-up" className='rounded-md py-8 shadow-xl'>
                    <div>
                        <h1 className='font-bold text-xl'>Higher Secondary Certificate(HSC)</h1>
                        <p className='font-semibold text-xl'>Govt. Barishal College, Barishal</p>
                        <p>(2020-2022) - Science</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationQualification;