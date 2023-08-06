import Image from 'next/image';
import React from 'react';

const WhatIDo = () => {
    return (
        <div>
            <div className='text-center mt-16 w-2/4 mx-auto'>
                <h1 className='text-3xl font-bold mb-5'>What I Do</h1>
                <p>I have more than 10 years experience building software for clients all over the world. Below is a quick
                    overview of my main technical skill sets and technologies i use. Want to find out more about my experience?
                    Check out my online resume and project portfolio</p></div>
            <div className='grid grid-cols-2 lg:grid-cols-4 mx-auto gap-5 mt-8'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <Image src="/js.png" alt="Shoes"
                            width={50}
                        height={50}    className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-left p-8">
                        <h2 className="card-title mt-5 mb-2">Vanilla JavaScript</h2>
                        <p>List skill/technologies
                            here. You can change the
                            icon above to any of the
                            1500+ FontAwesome 5
                            free icons available.
                            Aenean commodo ligula
                            eget dolor.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <Image src="/nodejs.png" alt="Shoes"
                            width={50}
                        height={50}    className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-left p-8">
                        <h2 className="card-title mt-5 mb-2">Node.Js</h2>
                        <p>List skill/technologies
                            here. You can change the
                            icon above to any of the
                            1500+ FontAwesome 5
                            free icons available.
                            Aenean commodo ligula
                            eget dolor.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <Image src="/react.png" alt="Shoes"
                            width={50}
                        height={50}    className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-left p-8">
                        <h2 className="card-title mt-5 mb-2">React.Js</h2>
                        <p>List skill/technologies
                            here. You can change the
                            icon above to any of the
                            1500+ FontAwesome 5
                            free icons available.
                            Aenean commodo ligula
                            eget dolor.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <Image src="/mongo.png" alt="Shoes"
                            width={50}
                        height={50}    className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-left p-8">
                        <h2 className="card-title mt-5 mb-2">MongoDB</h2>
                        <p>List skill/technologies
                            here. You can change the
                            icon above to any of the
                            1500+ FontAwesome 5
                            free icons available.
                            Aenean commodo ligula
                            eget dolor.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIDo;