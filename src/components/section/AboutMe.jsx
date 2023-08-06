import React from 'react';

const AboutMe = () => {
    return (
        <div className='bg-red-50 text-center w-3/4 mx-auto mt-16 p-8'>
            <h1 className='text-3xl font-bold mt-8 mb-5'>About Me</h1> 
            <p className='w-2/4 mx-auto'>I, m a designer & developer with a passion for web design. I enjoy developing simple, clean and
                slick websites that provide real value to the end user. Thousands of clients have procured
                exceptional resulfs while working with me. Delivering work within time and budget which meets
                clients requirements in our mata.</p>
            <div className='mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5'>
                <div>
                    <p>name:</p>
                    <h1 className='font-bold text-xl'>Mary Hardy</h1>
                </div>
                <div>
                    <p>Email:</p>
                    <h1 className='font-bold text-xl'>mayHardy@gamil.com</h1>
                </div>
                <div>
                    <p>Date Of Birth:</p>
                    <h1 className='font-bold text-xl'>20 may,1995</h1>
                </div>
                <div>
                    <p>From:</p>
                    <h1 className='font-bold text-xl'>Loss angel, Amerika</h1>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;