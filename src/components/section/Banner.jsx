

import React from 'react';
import Image from 'next/image';

const Banner = () => {
    const cardStyle = {
        backgroundImage: 'url("/header_bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: 'full',
        height: 'full',
    };
    return (
        <div className='flex'>
            <Image src="/developer.png" alt=""
                width={60}
                height={1000}/>
            <div className='grid grid-cols-1 lg:grid-cols-2 bg-red-50'>
                <div className='mt-20 p-5'>
                    <h1 className='text-3xl font-bold'>Hi, I am</h1>
                    <h1 className='text-3xl font-bold text-red-800 mt-3 mb-5'>Marry Hardy</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
                        blanditiis corrupti consequuntur eveniet, quis quia eos
                    </p>
                    <div className='flex mt-5'>
                        <div className="justify-end mr-3">
                            <button className="btn btn-primary">Download Cv</button>
                        </div>
                        <div className="justify-end">
                            <button className="btn btn-primary">Download Cv</button>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto" style={cardStyle}>
                    <div className="">
                        <Image src="/hardy.png" alt=""
                            width={400}
                            height={1000} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
