import Image from 'next/image';
import React from 'react';

const LetsConnect = () => {
    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200 mt-16 p-8">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='w-3/4 mx-auto'>
                        <h1 className='text-3xl font-bold'>lets Connect</h1>
                        <p>Please fill out the form on this section to contact with me or call between
                            9:00 A.M and 8.00 P.M ET, Monday through Friday.</p>
                        <div className='flex mt-5'>
                            <Image className='mr-4' src="/twitter.png" width={30} height={30} alt="" />
                            <Image src="/insta.png" width={30} height={30} alt="" />
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="text" placeholder="Your email" className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text">Write</span>

                                </label>
                                <textarea className='bg-red-50 w-full' placeholder="write some thing" name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LetsConnect;