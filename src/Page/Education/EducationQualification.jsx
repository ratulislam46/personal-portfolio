import React from 'react';

const EducationQualification = () => {
    return (
        <div section className="py-10 px-4 md:px-8">
            <h1 className='text-center text-2xl md:text-4xl lg:text-5xl text-base-content font-bold mt-12 mb-6'>Education Qualification</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-center md:justify-between'>
                <div className='border border-gray-200 rounded-md py-8 shadow'>
                    <h1 className='font-bold text-xl'>Bachelor of Business Administration(BBA)</h1>
                    <p className='font-semibold text-xl'>National University, Bangladesh</p>
                    <p>(2022-23) 2<sup>nd</sup>Year -  Marketing</p>
                </div>
                <div className='border border-gray-200 rounded-md py-8 shadow'>
                    <h1 className='font-bold text-xl'>Higher Secondary Certificate(HSC)</h1>
                    <p className='font-semibold text-xl'>Govt. Barishal College, Barishal</p>
                    <p>(2020-2022) - Science</p>
                </div>
            </div>
        </div>
    );
};

export default EducationQualification;