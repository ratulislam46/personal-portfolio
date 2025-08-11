import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypeWriter = ({ text }) => {
    return (
        <span className='text-2xl lg:text-4xl'>
            <Typewriter
                words={[text]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={150}
                deleteSpeed={100}
                delaySpeed={1000}
            ></Typewriter>
        </span>
    );
};

export default TypeWriter;